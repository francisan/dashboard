package com.fujifilm.HL7.configuration;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.fujifilm.HL7.model.Role;
import com.fujifilm.HL7.model.User;
import com.fujifilm.HL7.model.UserAttempts;
import com.fujifilm.HL7.repositories.RoleRepository;
import com.fujifilm.HL7.repositories.UserAttemptsRepository;
import com.fujifilm.HL7.service.UserService;

@Component
public class CustomSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

	@Autowired
	private UserService userService;

	@Autowired
	private RoleRepository roleRepo;

	@Autowired
	private UserAttemptsRepository userAttemptsRepository;

	public static final Logger logger = LoggerFactory.getLogger(CustomSuccessHandler.class);

	private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

	protected void handle(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
			throws IOException {
		// request.getParameter("userRole") //hiden field

		UserDetails userDetail = (UserDetails) authentication.getPrincipal();
		long roleSelected = Long.parseLong(request.getParameter("role"));
		String email = userDetail.getUsername();

		List<User> users = userService.findValidUser(email, roleSelected);
		Role role = roleRepo.findOne(roleSelected);
		// Reset user failed attempt as success login received
		UserAttempts userAttempts = userAttemptsRepository.findByUser(users.get(0));
		if (userAttempts != null) {
			userAttempts.setAttempts(0);
			userAttemptsRepository.save(userAttempts);
		}

		if (users.isEmpty()) {
			logger.info("User selected a invalid role");
			redirectStrategy.sendRedirect(request, response, "/logout");
		} else {
			logger.info("User selected a valid role");
			request.getSession().setAttribute("user", users.get(0));
			request.getSession().setAttribute("userRole", role);
			request.getSession().setAttribute("userRoleId", roleSelected);
			redirectStrategy.sendRedirect(request, response, "/home");
		}
	}

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {
		handle(request, response, authentication);
	}

}
