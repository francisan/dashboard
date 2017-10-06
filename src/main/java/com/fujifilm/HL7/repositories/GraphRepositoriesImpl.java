package com.fujifilm.HL7.repositories;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.fujifilm.HL7.builders.GraphDataBuilder;
import com.fujifilm.HL7.model.GraphData;

@Repository
public class GraphRepositoriesImpl implements GraphRepositories {

	@Autowired
	EntityManager em;

	@Override
	public GraphData buildGraphData(String sql, String graphType, String title, boolean isStacked,
			boolean is3DEnabled) {
		Query q = em.createNativeQuery(sql);
		List<Object[]> rows = q.getResultList();
		GraphDataBuilder builer = new GraphDataBuilder();
		builer.withTittle(title).withType(graphType).withStacked(isStacked).with3DProperties(is3DEnabled).withData(rows,
				graphType);
		return builer.build();
	}
}
