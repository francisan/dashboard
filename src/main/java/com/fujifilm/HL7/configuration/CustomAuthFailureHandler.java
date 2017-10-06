package com.fujifilm.HL7.configuration;

import java.io.IOException;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import com.fujifilm.HL7.model.User;
import com.fujifilm.HL7.model.UserAttempts;
import com.fujifilm.HL7.repositories.UserAttemptsRepository;
import com.fujifilm.HL7.repositories.UserRepository;

@Component("customAuthFailureHandler")
public class CustomAuthFailureHandler extends SimpleUrlAuthenticationFailureHandler {

	// private String defaultFailureUrl;

	@Autowired
	private UserAttemptsRepository userAttemptsRepository;

	@Autowired
	private UserRepository userRepository;

	public CustomAuthFailureHandler() {
		super();

	}

	public CustomAuthFailureHandler(String defaultFailureUrl) {
		super(defaultFailureUrl);
		/* this.defaultFailureUrl = defaultFailureUrl; */
	}

	@Override
	public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException exception) throws IOException, ServletException {
		logger.info("onAuthenticationFailure : " + exception.getClass());

		if (exception instanceof DisabledException) {
			logger.info("DisabledException : " + exception.getClass());
		} else if (exception instanceof BadCredentialsException) {
			logger.info("BadCredentialsException : " + exception.getClass());

			String email = request.getParameter("email").toString();
			User user = userRepository.findByEmail(email);
			if (user != null) {
				UserAttempts userAttempts = userAttemptsRepository.findByUser(user);
				if (userAttempts == null) {
					userAttempts = new UserAttempts();
					userAttempts.setAttempts(0);
					userAttempts.setUser(user);
					userAttempts.setLastModified(new Date());
				}

				if (userAttempts.getAttempts() >= 4) {
					logger.info("5 fialed login attempt, user-" + user.getEmail() + " locked");
					user.setActive(0);
					userRepository.save(user);
				} else {
					userAttempts.setAttempts(userAttempts.getAttempts() + 1);
					userAttemptsRepository.save(userAttempts);
				}
			}

		} else if (exception instanceof LockedException) {
			logger.info("LockedException : " + exception.getClass());
		}

		saveException(request, exception);
		super.getRedirectStrategy().sendRedirect(request, response, "/login?error=true");

	}
}
