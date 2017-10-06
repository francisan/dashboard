package com.fujifilm.HL7.controller;

import javax.servlet.http.HttpSession;

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

import com.fujifilm.HL7.model.GraphData;
import com.fujifilm.HL7.service.GraphService;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping("/drawGraph")
public class GraphController {

	public static final Logger logger = LoggerFactory.getLogger(GraphController.class);

	@Autowired
	GraphService graphService;

	/**
	 * 
	 * @param reportId
	 * @return
	 */
	@ApiOperation(value = "Get Graph model data generated based on report id.")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Successfully retrieved list"),
			@ApiResponse(code = 401, message = "You are not authorized to view the resource"),
			@ApiResponse(code = 403, message = "Accessing the resource you were trying to reach is forbidden"),
			@ApiResponse(code = 404, message = "The resource you were trying to reach is not found") })
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)

	public ResponseEntity<GraphData> drawGraph(@PathVariable("id") long reportId,
			@RequestParam(name = "filter", required = false) String filter, HttpSession httpSession) {
		logger.info("user roleselected : " + httpSession.getAttribute("userRoleId"));
		logger.info("Filter condition " + filter);
		GraphData graphData;
		if (filter == null) {
			graphData = graphService.getGraphData(reportId);
		} else {
			graphData = graphService.getGraphDataReport(reportId, filter);
		}
		return new ResponseEntity<GraphData>(graphData, HttpStatus.OK);
	}

}
