package com.fujifilm.HL7.service;

import java.util.List;

import com.fujifilm.HL7.model.User;

public interface UserService {
	public User findUserByEmail(String email);
	public void saveUser(User user);
	public List<User> findValidUser(String email, long roleId);
}