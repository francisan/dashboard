package com.fujifilm.HL7.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fujifilm.HL7.model.Report;
import com.fujifilm.HL7.model.Role;
import com.fujifilm.HL7.model.User;
import com.fujifilm.HL7.model.Widget;
import com.fujifilm.HL7.repositories.RoleRepository;
import com.fujifilm.HL7.repositories.UserRepository;
import com.fujifilm.HL7.service.ReportConfigService;
import com.fujifilm.HL7.service.WidgetConfigService;

@RestController
@RequestMapping("/dashboard_config")
public class DashboardConfigController {

	@Autowired
	UserRepository userRepository;
	@Autowired
	RoleRepository roleRepository;

	public static final Logger logger = LoggerFactory.getLogger(DashboardConfigController.class);

	@Autowired
	private WidgetConfigService widgetConfigService;

	@Autowired
	private ReportConfigService reportConfigService;

	@RequestMapping(value = "/all_widgets", method = RequestMethod.GET)
	public ResponseEntity<List<Widget>> listWidgetConfig(HttpSession httpSession) {
		ResponseEntity<List<Widget>> responseEntity;
		User user = (User) httpSession.getAttribute("user");
		List<Widget> widgets;
		if (user == null) {
			widgets = widgetConfigService.FindAllWidgetConfig(3, 3);
		} else {
			long roleId = Long.parseLong(httpSession.getAttribute("userRoleId").toString());
			widgets = widgetConfigService.FindAllWidgetConfig(user.getId(), roleId);
		}

		if (widgets.isEmpty()) {
			responseEntity = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			responseEntity = new ResponseEntity<List<Widget>>(widgets, HttpStatus.OK);
		}
		return responseEntity;
	}

	@RequestMapping(value = "/update_widget_config", method = RequestMethod.POST)
	public ResponseEntity updateWidgetConfig(@RequestBody List<Widget> changedUserWidgets, HttpSession httpSession) {
		ResponseEntity responseEntity;
		Role role = (Role) httpSession.getAttribute("userRole");
		User user = (User) httpSession.getAttribute("user");

		if (user == null) {
			widgetConfigService.updateWidgetConfig(userRepository.getOne(3), roleRepository.getOne(3l),
					changedUserWidgets);
		} else {
			widgetConfigService.updateWidgetConfig(user, role, changedUserWidgets);
		}

		responseEntity = new ResponseEntity<>(HttpStatus.OK);
		return responseEntity;
	}

	@RequestMapping(value = "/all_reports", method = RequestMethod.GET)
	public ResponseEntity<List<Report>> listReportConfig(HttpSession httpSession) {
		ResponseEntity<List<Report>> responseEntity;
		User user = (User) httpSession.getAttribute("user");
		List<Report> reports;
		if (user == null) {
			reports = reportConfigService.findAllReportConfig(3, 3);
		} else {
			long roleId = Long.parseLong(httpSession.getAttribute("userRoleId").toString());
			reports = reportConfigService.findAllReportConfig(user.getId(), roleId);
		}

		if (reports.isEmpty()) {
			responseEntity = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			responseEntity = new ResponseEntity<List<Report>>(reports, HttpStatus.OK);
		}
		return responseEntity;
	}

	@RequestMapping(value = "/update_report_config", method = RequestMethod.POST)
	public ResponseEntity updateReportConfig(@RequestBody List<Report> configuredReports, HttpSession httpSession) {
		ResponseEntity responseEntity;
		Role role = (Role) httpSession.getAttribute("userRole");
		User user = (User) httpSession.getAttribute("user");

		if (user == null) {
			reportConfigService.updateReportConfig(userRepository.getOne(3), roleRepository.getOne(3l),
					configuredReports);
		} else {
			reportConfigService.updateReportConfig(user, role, configuredReports);
		}
		responseEntity = new ResponseEntity<>(HttpStatus.OK);
		return responseEntity;
	}
}
