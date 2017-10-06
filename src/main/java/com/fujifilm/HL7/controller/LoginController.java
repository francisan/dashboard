package com.fujifilm.HL7.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.fujifilm.HL7.model.User;
import com.fujifilm.HL7.service.UserService;

@Controller
public class LoginController {

	@Autowired
	private UserService userService;

	public static final Logger logger = LoggerFactory.getLogger(LoginController.class);

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ModelAndView login(@RequestParam(value = "error", required = false) String error,
			@RequestParam(value = "logout", required = false) String logout) {
		ModelAndView modelAndView = new ModelAndView();
		if (error != null) {
			modelAndView.addObject("error", error);
		}
		if (logout != null) {
			modelAndView.addObject("msg", "You've been logged out successfully.");
		}
		modelAndView.setViewName("login");
		return modelAndView;
	}
	
	@RequestMapping(value = "/403", method = RequestMethod.GET)
	public ModelAndView accesssDenied() {

		ModelAndView model = new ModelAndView();

		// check if user is login
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (!(auth instanceof AnonymousAuthenticationToken)) {
			UserDetails userDetail = (UserDetails) auth.getPrincipal();
			String userName = userDetail.getUsername();
			logger.info("Un Autherized access from user, " + userName);
			model.addObject("username", userName);
		}
		model.setViewName("403");
		return model;

	}

	@RequestMapping(value = "/addAdmin", method = RequestMethod.GET)
	public ModelAndView registration() {
		ModelAndView modelAndView = new ModelAndView();
		User user = new User();
		user.setLastName("Dubai");
		user.setName("Alminas");
		user.setActive(1);
		user.setEmail("demo");
		user.setPassword("demo");
		userService.saveUser(user);
		modelAndView.addObject("user", user);
		modelAndView.setViewName("login");
		return modelAndView;
	}

	@RequestMapping(value = "/header", method = RequestMethod.GET)
	public ModelAndView header() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("header");
		return modelAndView;
	}

	@RequestMapping(value = { "/","/home"}, method = RequestMethod.GET)
	public ModelAndView home() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("dashboard1");
		return modelAndView;
	}

	@RequestMapping(value = "/mydashboard", method = RequestMethod.GET)
	public ModelAndView mydashboard() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("mydashboard");
		return modelAndView;
	}

	@RequestMapping(value = "/myreports", method = RequestMethod.GET)
	public ModelAndView myreports() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("myreports");
		return modelAndView;
	}
	
	@RequestMapping(value = "/customreports", method = RequestMethod.GET)
	public ModelAndView customreports() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("customreports");
		return modelAndView;
	}

	@RequestMapping(value = "/preferences", method = RequestMethod.GET)
	public ModelAndView preferences() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("preferences");
		return modelAndView;
	}

	@RequestMapping(value = "/helpcenter", method = RequestMethod.GET)
	public ModelAndView helpcenter() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("helpcenter");
		return modelAndView;
	}

	@RequestMapping(value = "/compare", method = RequestMethod.GET)
	public ModelAndView newmydashboard() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("compare");
		return modelAndView;
	}

	@RequestMapping(value = "/footer", method = RequestMethod.GET)
	public ModelAndView footer() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("footer");
		return modelAndView;
	}

}