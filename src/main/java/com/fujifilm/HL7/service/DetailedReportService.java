package com.fujifilm.HL7.service;

import java.util.List;

public interface DetailedReportService {

	List<Object[]> getDetailedReport(long reportId);
	List<Object[]> getDetailedReport(long reportId, String filters);
}
