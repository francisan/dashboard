package com.fujifilm.HL7.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fujifilm.HL7.model.DashboardReportConfig;
import com.fujifilm.HL7.model.Report;
import com.fujifilm.HL7.model.Role;
import com.fujifilm.HL7.model.User;
import com.fujifilm.HL7.repositories.DashboardReportConfigRepository;
import com.fujifilm.HL7.repositories.RolereportRepository;

@Service("ReportConfigService")
@Transactional
public class ReportConfigServiceImpl implements ReportConfigService {
	
	@Autowired
	private DashboardReportConfigRepository dashboardReportConfigRepository;
	
	@Autowired
	private RolereportRepository rolereportRepository;

	@Override
	public List<Report> findAllReportConfig(int userId, long roleId) {
		List<Long> ids = dashboardReportConfigRepository.findUserAndRoleBasedReportConf(userId, roleId);
		List<Report> reports = rolereportRepository.findAllReportByRole(roleId);
		List<Report> list = buildReportModel(reports, ids);
		return list;
	}
	
	private List<Report> buildReportModel(List<Report> reports, List<Long> selectedReportConfigIds){
		for(Report report: reports){
			if(selectedReportConfigIds.contains(report.getId())){
				report.setSelected(true);
			} else {
				report.setSelected(false);
			}
		}
		return reports;
	}

	@Override
	public boolean updateReportConfig(User user, Role role, List<Report> reports) {
		dashboardReportConfigRepository.updateStatusForUserAndRole(user.getId(), role.getId());
		List<DashboardReportConfig> dashboardReportConfigs= new ArrayList<>();
		long reportOrder=0;
		for(Report report : reports) {
			if(report.isSelected()){
				reportOrder++;
				DashboardReportConfig reportConfig = new DashboardReportConfig();
				reportConfig.setUser(user);
				reportConfig.setRole(role);
				reportConfig.setReport(report);
				reportConfig.setReportOrder(reportOrder);
				reportConfig.setChangedBy(user.getEmail());
				reportConfig.setActionDateTime(new Date());
				reportConfig.setStatus(true);
				dashboardReportConfigs.add(reportConfig);
			}
		}
		dashboardReportConfigRepository.save(dashboardReportConfigs);		
		return true;
	}

}
