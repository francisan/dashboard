package com.fujifilm.HL7.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fujifilm.HL7.model.Report;
import com.fujifilm.HL7.model.RoleReport;
import com.fujifilm.HL7.model.RoleReportId;

public interface RolereportRepository extends JpaRepository<RoleReport,RoleReportId>{
	
	@Query("SELECT r FROM RoleReport rr join rr.id.role role join rr.id.report r WHERE role.id= ?1")
	List<Report> findAllReportByRole(long roleId);
}
