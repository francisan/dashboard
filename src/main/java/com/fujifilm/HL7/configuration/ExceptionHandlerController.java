package com.fujifilm.HL7.configuration;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.fujifilm.HL7.exceptions.ReportNotFoundException;
import javax.persistence.EntityNotFoundException;

@ControllerAdvice
public class ExceptionHandlerController {

	public static final String DEFAULT_ERROR_VIEW = "error";

	public static final Logger logger = LoggerFactory.getLogger(ExceptionHandlerController.class);

	/**
	 * 
	 * @param request
	 * @param ex
	 * @return
	 */
	@ExceptionHandler(SQLException.class)
	public ResponseEntity<String> handleSQLException(HttpServletRequest request, Exception e) {
		logger.error("SQLException Occured :: URL=" + request.getRequestURL(), e);
		ResponseEntity<String> exceptionEntity = new ResponseEntity<String>("Resource Not Found", HttpStatus.NOT_FOUND);
		return exceptionEntity;
	}

	/**
	 * 
	 */
	@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "IOException occured")
	@ExceptionHandler(IOException.class)
	public ResponseEntity<String> handleIOException(HttpServletRequest request, Exception e) {
		logger.error("IOException handler :: URL=" + request.getRequestURL(), e);
		ResponseEntity<String> exceptionEntity = new ResponseEntity<String>("Resource Not Found", HttpStatus.NOT_FOUND);
		return exceptionEntity;
	}

	/**
	 * 
	 * @param ex
	 * @param response
	 * @return
	 */
	@ExceptionHandler({ ReportNotFoundException.class, EntityNotFoundException.class })
	public ResponseEntity<String> handleReportNotFoundException(HttpServletRequest request, Exception e) {
		logger.error("ReportNotFoundException Occured :: URL=" + request.getRequestURL(), e);
		ResponseEntity<String> exceptionEntity = new ResponseEntity<String>("Resource Not Found", HttpStatus.NOT_FOUND);
		return exceptionEntity;
	}

}
