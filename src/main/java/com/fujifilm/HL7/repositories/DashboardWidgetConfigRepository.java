package com.fujifilm.HL7.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.fujifilm.HL7.model.DashboardWidgetConfig;

public interface DashboardWidgetConfigRepository extends JpaRepository<DashboardWidgetConfig, Long> {

	/*@Query("SELECT wc FROM DashboardWidgetConfig wc join fetch wc.dashboardWidgetId.user u join fetch wc.dashboardWidgetId.role r WHERE u.id= ?1 AND r.id= ?2")
	List<DashboardWidgetConfig> findUserAndRoleBasedWigetConf(int userId, long roleId);*/
	
	@Query("SELECT w.id FROM DashboardWidgetConfig wc join wc.user u join wc.role r join wc.widget w WHERE u.id= ?1 AND r.id= ?2 and wc.status =1")
	List<Long> findUserAndRoleBasedWigetConf(int userId, long roleId);
	
	@Modifying(clearAutomatically = true)
    @Query("UPDATE DashboardWidgetConfig wc SET wc.status = 0 WHERE wc.user.id= ?1 AND wc.role.id= ?2")
	void updateStatusForUserAndRole(int userId, long roleId);
	
	/*@Modifying
    @Query(value = "insert into Logger (redirect,user_id) VALUES (:insertLink,:id)", nativeQuery = true)
	void updateStatusForUserAndRole(int userId, long roleId);*/
}
