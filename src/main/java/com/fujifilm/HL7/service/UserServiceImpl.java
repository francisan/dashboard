package com.fujifilm.HL7.service;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fujifilm.HL7.configuration.CustomSuccessHandler;
import com.fujifilm.HL7.model.Role;
import com.fujifilm.HL7.model.User;
import com.fujifilm.HL7.repositories.RoleRepository;
import com.fujifilm.HL7.repositories.UserRepository;


@Service("userService")
@Transactional
public class UserServiceImpl implements UserService{

	public static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
	
	@Autowired
	private UserRepository userRepository;
	@Autowired
    private RoleRepository roleRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Override
	public User findUserByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	@Override
	public void saveUser(User user) {
		Role role =new Role();
		role.setRole("ADMIN");
		roleRepository.save(role);
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setActive(1);
        Role userRole = roleRepository.findByRole("ADMIN");
        user.setRoles(new HashSet<Role>(Arrays.asList(userRole)));
		userRepository.save(user);
	}

	@Override
	public List<User> findValidUser(String email, long roleId) {
		/*//return !userRepository.userRoleCount(email, roleId).isEmpty();
		Role role = roleRepository.findOne(roleId);
		if(role != null )
			return userRepository.findByEmail(email).getRoles().contains(role);
		else
			return false;*/
		List<User> users = userRepository.userRoleCount(email, roleId);
		logger.info("Users found : " + users.size());
		return users;//users.isEmpty()? false : true;
	}

}