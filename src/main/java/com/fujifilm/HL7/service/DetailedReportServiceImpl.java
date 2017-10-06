package com.fujifilm.HL7.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fujifilm.HL7.model.Report;
import com.fujifilm.HL7.repositories.DetailedReportRepository;
import com.fujifilm.HL7.repositories.ReportRepository;
import com.fujifilm.HL7.util.QueryUtil;

@Service("detailedReportService")
@Transactional
public class DetailedReportServiceImpl implements DetailedReportService{
	
	public static final Logger logger = LoggerFactory.getLogger(DetailedReportServiceImpl.class);
	
	@Autowired
	private ReportRepository reportRepository; 
	
	@Autowired
	private DetailedReportRepository detailedReportRepository;

	@Override
	public List<Object[]> getDetailedReport(long reportId) {
		Report report = reportRepository.getOne(reportId);
		logger.info("Report Obj value : " + report);
		String sql = report.getDetailedQuery();
		List<Object[]> data = detailedReportRepository.runQuery(sql);
		return data;
	}

	@Override
	public List<Object[]> getDetailedReport(long reportId, String filter) {
		Report report = reportRepository.getOne(reportId);
		logger.info("Filter condition : " + filter);
		String sql = report.getDetailedQuery();
		sql = QueryUtil.queryConditionAppend(sql, filter);
		List<Object[]> data = detailedReportRepository.runQuery(sql);
		return data;
	}
	
	

}
