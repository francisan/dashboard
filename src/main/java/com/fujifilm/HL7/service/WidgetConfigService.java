package com.fujifilm.HL7.service;

import java.util.List;

import com.fujifilm.HL7.model.Role;
import com.fujifilm.HL7.model.User;
import com.fujifilm.HL7.model.Widget;

public interface WidgetConfigService {

	public List<Widget> FindAllWidgetConfig(int userId, long rollId);
	public boolean updateWidgetConfig(User user, Role role, List<Widget> widgets);
	
}
