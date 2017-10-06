package com.fujifilm.HL7.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "widget")
public class Widget {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id")
	private long id;

	@Column(name="title")
	private String title;
	
	@Column(name="icon_location")
	private String iconLocation;
	
	@Column(name="query")
	private String query;
	
	@Column(name="display_color")
	private String displayColor;
	
	@Transient
	private boolean isSelected;

	public boolean isSelected() {
		return isSelected;
	}

	public void setSelected(boolean isSelected) {
		this.isSelected = isSelected;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getIconLocation() {
		return iconLocation;
	}

	public void setIconLocation(String iconLocation) {
		this.iconLocation = iconLocation;
	}

	public String getQuery() {
		return query;
	}

	public void setQuery(String query) {
		this.query = query;
	}

	public String getDisplayColor() {
		return displayColor;
	}

	public void setDisplayColor(String displayColor) {
		this.displayColor = displayColor;
	}
	
}
