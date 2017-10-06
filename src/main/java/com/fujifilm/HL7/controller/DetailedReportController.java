package com.fujifilm.HL7.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fujifilm.HL7.service.DetailedReportService;

@RestController
@RequestMapping("/detailed_report")
public class DetailedReportController {

	public static final Logger logger = LoggerFactory.getLogger(DetailedReportController.class);
	
	@Autowired
	DetailedReportService detailedReportService;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<List<Object[]>> drawGraph(@PathVariable("id") long reportId,
			@RequestParam(name = "filter", required = false) String filter, HttpServletRequest request) {
		List<Object[]> reportData;
		if (filter == null) {
			reportData = detailedReportService.getDetailedReport(reportId);
		} else {
			reportData = detailedReportService.getDetailedReport(reportId, filter);
		}
		return new ResponseEntity<List<Object[]>>(reportData, HttpStatus.OK);
	}
}
