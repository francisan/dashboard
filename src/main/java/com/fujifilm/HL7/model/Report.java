package com.fujifilm.HL7.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "report")
public class Report {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id")
	private long id;
	
	@Column(name="name")
	private String name;
	
	
	@Column(name="url")
	private String url;
	
	@org.springframework.data.annotation.Transient
	@Column(name="querry")
	private String querry;
	
	@Column(name="graph_type")
	private String graphType;
	
	@Column(name="is_stacked")
	private boolean isStacked;
	
	@Column(name="is_3D_enabled")
	private boolean is3DEnabled;
	
	@org.springframework.data.annotation.Transient
	@Column(name="detailed_query")
	private String detailedQuery;

	public String getDetailedQuery() {
		return detailedQuery;
	}
	public void setDetailedQuery(String detailedQuery) {
		this.detailedQuery = detailedQuery;
	}
	@Transient
	private boolean selected;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getQuerry() {
		return querry;
	}
	public void setQuerry(String querry) {
		this.querry = querry;
	}
	public String getGraphType() {
		return graphType;
	}
	public void setGraphType(String graphType) {
		this.graphType = graphType;
	}
	public boolean isStacked() {
		return isStacked;
	}
	public void setStacked(boolean isStacked) {
		this.isStacked = isStacked;
	}
	public boolean isIs3DEnabled() {
		return is3DEnabled;
	}
	public void setIs3DEnabled(boolean is3dEnabled) {
		is3DEnabled = is3dEnabled;
	}
	public boolean isSelected() {
		return selected;
	}
	public void setSelected(boolean selected) {
		this.selected = selected;
	}
	
	
}
