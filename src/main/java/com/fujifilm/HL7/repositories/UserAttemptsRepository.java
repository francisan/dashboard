package com.fujifilm.HL7.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fujifilm.HL7.model.User;
import com.fujifilm.HL7.model.UserAttempts;

@Repository("userAttemptsRepository")
public interface UserAttemptsRepository extends JpaRepository<UserAttempts,Integer>{
	UserAttempts findByUser(User user);

}
