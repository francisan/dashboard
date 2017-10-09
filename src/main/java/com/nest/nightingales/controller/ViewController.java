package com.nest.nightingales.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class ViewController {
	
	public static final Logger logger = LoggerFactory.getLogger(ViewController.class);
	
	@RequestMapping(value = "/view", method = RequestMethod.GET)
	public ModelAndView home() {
		logger.info("ViewController !!!!!");
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("index");
		return modelAndView;
	}

}
