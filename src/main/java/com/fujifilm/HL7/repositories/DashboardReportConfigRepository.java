package com.fujifilm.HL7.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.fujifilm.HL7.model.DashboardReportConfig;

public interface DashboardReportConfigRepository extends JpaRepository<DashboardReportConfig, Long>{

	@Query("SELECT report.id FROM DashboardReportConfig rc join rc.user u join rc.role r join rc.report report WHERE u.id= ?1 AND r.id= ?2 and rc.status =1")
	List<Long> findUserAndRoleBasedReportConf(int userId, long roleId);
	
	@Modifying(clearAutomatically = true)
    @Query("UPDATE DashboardReportConfig rc SET rc.status = 0 WHERE rc.user.id= ?1 AND rc.role.id= ?2")
	void updateStatusForUserAndRole(int userId, long roleId);
}
