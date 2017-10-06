package com.fujifilm.HL7.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GraphData {

	private List<Map<String,String>> titles = new ArrayList<>();
	private Map<String,Object> legend = new HashMap<>();
	private String type;
	private String theme = "light";
	private String dataTableId = "chartdata";
	private boolean rotate = false;
	private int marginRight = 0;
	private String dataDateFormat;
	private Map<String,Object> chartCursor =  new HashMap<>();
	private String pulledField = "pulled";
	
	private List<Map<String,Object>> dataProvider = new ArrayList<>();
	private List<Map<String,Object>> valueAxes = new ArrayList<>();
	private List<Map<String,Object>> graphs = new ArrayList<>();
	private String categoryField;
	Map<String,Object> categoryAxis;
	
	private String valueField;
	private String titleField;
	private int depth3D = 0;
	private int angle = 0;

	public List<Map<String, String>> getTitles() {
		return titles;
	}

	public void setTitles(List<Map<String, String>> titles) {
		this.titles = titles;
	}

	public Map<String, Object> getLegend() {
		return legend;
	}

	public void setLegend(Map<String, Object> legend) {
		this.legend = legend;
	}

	public List<Map<String, Object>> getDataProvider() {
		return dataProvider;
	}

	public void setDataProvider(List<Map<String, Object>> dataProvider) {
		this.dataProvider = dataProvider;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getTheme() {
		return theme;
	}

	public void setTheme(String theme) {
		this.theme = theme;
	}

	public int getMarginRight() {
		return marginRight;
	}

	public void setMarginRight(int marginRight) {
		this.marginRight = marginRight;
	}

	public List<Map<String, Object>> getValueAxes() {
		return valueAxes;
	}

	public void setValueAxes(List<Map<String, Object>> valueAxes) {
		this.valueAxes = valueAxes;
	}

	public List<Map<String, Object>> getGraphs() {
		return graphs;
	}

	public void setGraphs(List<Map<String, Object>> graphs) {
		this.graphs = graphs;
	}

	public String getCategoryField() {
		return categoryField;
	}

	public void setCategoryField(String categoryField) {
		this.categoryField = categoryField;
	}

	public Map<String, Object> getCategoryAxis() {
		return categoryAxis;
	}

	public void setCategoryAxis(Map<String, Object> categoryAxis) {
		this.categoryAxis = categoryAxis;
	}

	public String getValueField() {
		return valueField;
	}

	public void setValueField(String valueField) {
		this.valueField = valueField;
	}

	public String getTitleField() {
		return titleField;
	}

	public void setTitleField(String titleField) {
		this.titleField = titleField;
	}

	/**
	 * @return the dataDateFormat
	 */
	public String getDataDateFormat() {
		return dataDateFormat;
	}

	/**
	 * @param dataDateFormat the dataDateFormat to set
	 */
	public void setDataDateFormat(String dataDateFormat) {
		this.dataDateFormat = dataDateFormat;
	}

	/**
	 * @return the chartCursor
	 */
	public Map<String, Object> getChartCursor() {
		return chartCursor;
	}

	/**
	 * @param chartCursor the chartCursor to set
	 */
	public void setChartCursor(Map<String, Object> chartCursor) {
		this.chartCursor = chartCursor;
	}

	/**
	 * @return the rotate
	 */
	public boolean isRotate() {
		return rotate;
	}

	/**
	 * @param rotate the rotate to set
	 */
	public void setRotate(boolean rotate) {
		this.rotate = rotate;
	}

	/**
	 * @return the pulledField
	 */
	public String getPulledField() {
		return pulledField;
	}

	/**
	 * @param pulledField the pulledField to set
	 */
	public void setPulledField(String pulledField) {
		this.pulledField = pulledField;
	}

	public String getDataTableId() {
		return dataTableId;
	}

	public void setDataTableId(String dataTableId) {
		this.dataTableId = dataTableId;
	}

	public int getDepth3D() {
		return depth3D;
	}

	public void setDepth3D(int depth3d) {
		depth3D = depth3d;
	}

	public int getAngle() {
		return angle;
	}

	public void setAngle(int angle) {
		this.angle = angle;
	}

}
