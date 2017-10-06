package com.fujifilm.HL7.repositories;

import java.util.List;

public interface DetailedReportRepository {
	
	List<Object[]> runQuery(String sql);
}
