package com.fujifilm.HL7.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fujifilm.HL7.model.GraphData;
import com.fujifilm.HL7.model.Report;
import com.fujifilm.HL7.repositories.GraphRepositories;
import com.fujifilm.HL7.repositories.ReportRepository;
import com.fujifilm.HL7.util.QueryUtil;

@Service("GraphService")
@Transactional
public class GraphServiceImpl implements GraphService {

	@Autowired
	private ReportRepository reportRepo;

	@Autowired
	private GraphRepositories graphRepo;

	public static final Logger logger = LoggerFactory.getLogger(GraphServiceImpl.class);

	@Override
	public GraphData getGraphData(long reportId) {
		Report report = reportRepo.getOne(reportId);
		logger.info("Report Obj value : " + report);
		String sql = report.getQuerry();
		String graphType = report.getGraphType();
		String reportName = report.getName();
		GraphData data = graphRepo.buildGraphData(sql, graphType, reportName, report.isStacked(),
				report.isIs3DEnabled());
		return data;
	}

	@Override
	public GraphData getGraphDataReport(long reportId, String filter) {
		Report report = reportRepo.getOne(reportId);
		String sql = report.getQuerry();
		sql = QueryUtil.queryConditionAppend(sql, filter);
		logger.info("queryBuilder >>>>> " + sql);

		String graphType = report.getGraphType();
		String reportName = report.getName();
		GraphData data = graphRepo.buildGraphData(sql, graphType, reportName, report.isStacked(),
				report.isIs3DEnabled());
		return data;
	}
}
