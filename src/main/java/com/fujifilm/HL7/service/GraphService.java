package com.fujifilm.HL7.service;

import com.fujifilm.HL7.model.GraphData;

public interface GraphService {
	GraphData getGraphData(long reportId);
	GraphData getGraphDataReport(long reportId, String filters);
}
