package com.fujifilm.HL7.repositories;

import com.fujifilm.HL7.model.GraphData;

public interface GraphRepositories {

GraphData buildGraphData(String sql, String graphType, String title, boolean isStacked, boolean is3DEnabled);

//GraphData buildGraphDataForAP(String sql, String graphType, String title, String years, String modalities);

}
