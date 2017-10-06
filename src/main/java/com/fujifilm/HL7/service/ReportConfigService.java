package com.fujifilm.HL7.service;

import java.util.List;

import com.fujifilm.HL7.model.Report;
import com.fujifilm.HL7.model.Role;
import com.fujifilm.HL7.model.User;

public interface ReportConfigService {

	public List<Report> findAllReportConfig(int userId, long rollId);
	public boolean updateReportConfig(User user, Role role, List<Report> widgets);
}
