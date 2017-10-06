package com.fujifilm.HL7.repositories;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class DetailedReportRepositoryImpl implements DetailedReportRepository{

	@Autowired
	EntityManager em;

	@Override
	public List<Object[]> runQuery(String sql) {
		Query q = em.createNativeQuery(sql);
		return q.getResultList();
	}
}
