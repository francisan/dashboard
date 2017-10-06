package com.fujifilm.HL7.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fujifilm.HL7.model.Report;

@Repository
public interface ReportRepository extends JpaRepository<Report, Long>{

	Report findByName(String name);
}
