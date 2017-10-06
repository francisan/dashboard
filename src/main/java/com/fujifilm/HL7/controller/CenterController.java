package com.fujifilm.HL7.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fujifilm.HL7.model.Center;
import com.fujifilm.HL7.service.CenterService;

@RestController
@RequestMapping("/center")
public class CenterController {
	
	public static final Logger logger = LoggerFactory.getLogger(CenterController.class);
	
	@Autowired
	private CenterService centerService; 
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Center>> getAllCenter(HttpServletRequest request) {
		List<Center> centers = centerService.getAllCenter();
		return new ResponseEntity<List<Center>>(centers, HttpStatus.OK);
	}

}
