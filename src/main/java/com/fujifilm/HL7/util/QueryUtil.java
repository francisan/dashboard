package com.fujifilm.HL7.util;


public class QueryUtil {
	public static String  queryConditionAppend(String sql, String filterCondition){
		StringBuilder queryBuilder = new StringBuilder();
		queryBuilder.append(sql.substring(0, sql.indexOf("where ") + 6));
		queryBuilder.append(filterCondition);
		queryBuilder.append(" and ");
		queryBuilder.append(sql.substring(sql.indexOf("where ") + 6, sql.length()));
		sql = queryBuilder.toString();
		return sql;
	}

}
