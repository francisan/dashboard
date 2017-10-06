package com.fujifilm.HL7.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fujifilm.HL7.model.Center;
import com.fujifilm.HL7.repositories.CenterRepositories;

@Service("centerService")
public class CenterServiceImpl implements CenterService {
	
	@Autowired
	private CenterRepositories centerRepositories;

	@Override
	public List<Center> getAllCenter() {
		return centerRepositories.findAll();
	}

}
