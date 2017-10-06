package com.fujifilm.HL7.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="role_report")
public class RoleReport {

	@EmbeddedId
	private RoleReportId id;

	public RoleReportId getId() {
		return id;
	}

	public void setId(RoleReportId id) {
		this.id = id;
	}
	
}
