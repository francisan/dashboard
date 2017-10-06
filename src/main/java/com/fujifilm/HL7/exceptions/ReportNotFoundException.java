package com.fujifilm.HL7.exceptions;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND,reason ="This Report is not found")
public class ReportNotFoundException extends Exception{
	/**
	 * 
	 */
	private static final long serialVersionUID = 7675911228888229753L;

	public ReportNotFoundException(long id){
		super("This Report is not found, Id "+ id);
	}
	
	public ReportNotFoundException(String message){
		super(message);
	}
	
}
