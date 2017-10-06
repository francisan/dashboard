package com.fujifilm.HL7.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.fujifilm.HL7.model.User;


@Repository("userRepository")
public interface UserRepository extends JpaRepository<User, Integer> {
	 User findByEmail(String email);
	 
	 @Query("SELECT u FROM User u join fetch u.roles r WHERE u.email= ?1 AND r.id= ?2")
	 public List<User> userRoleCount(String email, long roleId);
	 
}