package com.fujifilm.HL7.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "role_widget")
public class RoleWidget {
	@EmbeddedId
	private RoleWidgetId id;

	public RoleWidgetId getId() {
		return id;
	}

	public void setId(RoleWidgetId id) {
		this.id = id;
	}

}
