package com.fujifilm.HL7.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fujifilm.HL7.model.DashboardWidgetConfig;
import com.fujifilm.HL7.model.Role;
import com.fujifilm.HL7.model.User;
import com.fujifilm.HL7.model.UserWidgetModel;
import com.fujifilm.HL7.model.Widget;
import com.fujifilm.HL7.repositories.DashboardWidgetConfigRepository;
import com.fujifilm.HL7.repositories.RoleWidgetRepo;

@Service("widgetConfigService")
@Transactional
public class WidgetConfigServiceImpl implements WidgetConfigService {

	@Autowired
	private DashboardWidgetConfigRepository widgetConfigRepo;
	
	@Autowired
	private RoleWidgetRepo roleWidgetRepo;
	
	@Override
	public List<Widget> FindAllWidgetConfig(int userId, long roleId) {
		List<Long> ids = widgetConfigRepo.findUserAndRoleBasedWigetConf(userId, roleId);
		List<Widget> widgets = roleWidgetRepo.FindAllWidgetByRole(roleId);
		List<Widget> list = buildWidgetModel(widgets, ids);
		 return list;
	}

	
	private List<Widget> buildWidgetModel(List<Widget> widgets, List<Long> selectedWidgetConfigIds){
		for(Widget widget: widgets){
			if(selectedWidgetConfigIds.contains(widget.getId())){
				widget.setSelected(true);
			} else {
				widget.setSelected(false);
			}
		}
		return widgets;
	}
	
	@Override
	public boolean updateWidgetConfig(User user, Role role, List<Widget> widgets) {
		
		widgetConfigRepo.updateStatusForUserAndRole(user.getId(), role.getId());
		List<DashboardWidgetConfig> dashboardWidgetConfigs= new ArrayList<>();
		long widgetOrder=0;
		for(Widget widget : widgets) {
			if(widget.isSelected()){
				widgetOrder++;
				DashboardWidgetConfig widgetConfig = new DashboardWidgetConfig();
				widgetConfig.setUser(user);
				widgetConfig.setRole(role);
				widgetConfig.setWidget(widget);
				widgetConfig.setWidgetOrder(widgetOrder);
				widgetConfig.setChangedBy(user.getEmail());
				widgetConfig.setActionDateTime(new Date());
				widgetConfig.setStatus(true);
				dashboardWidgetConfigs.add(widgetConfig);
			}
		}
		widgetConfigRepo.save(dashboardWidgetConfigs);		
		return true;
	}

}
