package com.fujifilm.HL7.builders;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fujifilm.HL7.model.ChartType;
import com.fujifilm.HL7.model.GraphData;


public class GraphDataBuilder {

	private GraphData data;
	private String type;
	private List<String> keys = new ArrayList<>();
	private static final String[] color = { "#FF0F00", "#FF6600", "#FF9E01", "#FCD202", "#F8FF01", "#B0DE09", "#04D215",
			"#0D8ECF", "#0D52D1", "#2A0CD0", "#8A0CCF", "#CD0D74" };

	private boolean isStacked;

	public GraphDataBuilder() {
		this.data = new GraphData();
	}

	/**
	 * 
	 * @return
	 */
	public String getType() {
		return type;
	}

	/**
	 * 
	 * @param type
	 */
	public void setType(String type) {
		this.type = type;
	}

	public boolean isStacked() {
		return isStacked;
	}

	public GraphDataBuilder withStacked(boolean isStacked) {
		this.isStacked = isStacked;
		return this;
	}

	/**
	 * 
	 * @param rows
	 * @param graphType
	 * @return
	 */
	public GraphDataBuilder withData(List<Object[]> rows, String graphType) {
		if (rows != null && !rows.isEmpty() && rows.get(0).length > 1) {
			int i;
			Map<String, Object> keyValue;
			if (isStacked) {
				for (i = 0; i < rows.size(); i++) {
					keyValue = new HashMap<String, Object>();
					Object[] row = rows.get(i);

					keyValue.put("X0", graphType.equalsIgnoreCase(ChartType.LINE) ? row[0].toString()
							: row[0].toString().replace(" ", "<br>"));
					String valueString;
					if (row[1].getClass() == byte[].class) {
						valueString = new String((byte[]) row[1]);
					} else {
						valueString = row[1].toString();
					}
					for (String groupfield : valueString.split(",")) {
						String[] values = groupfield.split(":");
						if (!keys.contains(values[0])) {
							keys.add(values[0]);
						}
						if (values.length > 1) {
							keyValue.put(values[0], values[1]);
						}
					}
					data.getDataProvider().add(keyValue);
				}

			} else {
				for (Object[] row : rows) {
					keyValue = new HashMap<String, Object>();
					i = 0;
					for (Object field : row) {
						if (i == 0) {
							field = field.toString().replace(" ", "<br>");
						}
						System.out.println("field.toString() >>>>>> " + field.toString());
						keyValue.put("X" + i, field);
						i++;
					}
					data.getDataProvider().add(keyValue);
				}
			}
		}
		return this;
	}

	/**
	 * 
	 * @return
	 */
	public GraphDataBuilder withType(String type) {
		switch (type) {
		case "pie":
		case "pat_gend_pie":
			this.data.setType("pie");
			break;
		case "bar":
		case "column":
		case "stack":
		case "line":
		case "center_wise_column":
			this.data.setType("serial");
			break;
		}
		this.setType(type);
		return this;
	}

	/**
	 * 
	 * @param margin
	 * @return
	 */
	public GraphDataBuilder withmarginRight(int margin) {
		this.data.setMarginRight(margin);
		return this;
	}

	/**
	 * 
	 * @param type
	 * @param title
	 * @return
	 */
	public GraphDataBuilder withValueAxis(String type, String title) {
		if (!type.equalsIgnoreCase(ChartType.PIE)) {
			Map<String, Object> keyValue = new HashMap();
			if (type.equalsIgnoreCase(ChartType.STACK)) {
				keyValue.put("stackType", "regular");
			}
			keyValue.put("title", title);
			this.data.getValueAxes().add(keyValue);
		}
		return this;
	}

	/**
	 * 
	 */
	private void withCategoryField() {
		this.data.setCategoryField("X0");
		this.withCategoryAxis();
	}

	/**
	 * 
	 * @return
	 */
	public GraphDataBuilder withCategoryAxis() {
		this.data.setCategoryAxis(new HashMap<>());
		this.data.getCategoryAxis().put("gridPosition", "start");
		this.data.getCategoryAxis().put("labelRotation", 0);
		return this;
	}

	/**
	 * 
	 * 
	 * @return
	 */
	public GraphDataBuilder withGraph() {
		Map<String, Object> keyValue = new HashMap<String, Object>();
		keyValue.put("balloonText", "<b>[[category]]: [[value]]</b>");
		keyValue.put("labelText", "[[value]]");
		if (!this.type.equalsIgnoreCase(ChartType.LINE)) {
			keyValue.put("lineAlpha", 0.3);
			keyValue.put("fillAlphas", 0.8);
		}
		if (this.type.equalsIgnoreCase(ChartType.COLUMN)) {
			keyValue.put("type", "column");
		}
		keyValue.put("fillColorsField", "color");
		keyValue.put("valueField", "X1");
		this.data.getGraphs().add(keyValue);
		return this;
	}

	/**
	 * 
	 * @return
	 */
	public GraphDataBuilder withMultiGraph() {
		System.out.println("keys HERE  " + keys.size());
		for (String key : keys) {
			Map<String, Object> keyValue = new HashMap<String, Object>();
			keyValue.put("balloonText",
					"<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>");
			if (!this.type.equalsIgnoreCase(ChartType.LINE)) {
				keyValue.put("lineAlpha", 0.3);
				keyValue.put("fillAlphas", 0.8);
			}
			if (this.type.equalsIgnoreCase(ChartType.COLUMN)) {
				keyValue.put("type", "column");
			} else if (this.type.equalsIgnoreCase(ChartType.LINE)) {
				keyValue.put("bullet", "round");
			}
			keyValue.put("title", key);
			keyValue.put("valueField", key);
			this.data.getGraphs().add(keyValue);
		}
		return this;
	}

	public GraphDataBuilder withSingleGraph() {
		Map<String, Object> keyValue = new HashMap<String, Object>();
		keyValue.put("fillAlphas", 0.8);
		keyValue.put("labelText", "[[value]]");
		keyValue.put("lineAlpha", 0.3);
		keyValue.put("type", "column");
		keyValue.put("fillColorsField", "color");
		keyValue.put("valueField", "X1");
		keyValue.put("title", "Count");
		this.data.getGraphs().add(keyValue);

		return this;
	}

	/**
	 * 
	 */
	void addBarColor() {
		int i = 0;
		for (Map<String, Object> map : this.data.getDataProvider()) {
			map.put("color", color[i++]);
			if (i == color.length) {
				i = 0;
			}
		}
	}

	void withLegend() {
		this.data.getLegend().put("position", "right");
		this.data.getLegend().put("marginRight", 0);
	}

	/*
	 * void withChartCursor() { this.data.getChartCursor().put("cursorAlpha",
	 * 0); this.data.getLegend().put("categoryBalloonEnabled", true); }
	 */

	public GraphDataBuilder withTittle(String titleText) {
		Map<String, String> titleMap = new HashMap<>();
		titleMap.put("text", titleText);
		this.data.getTitles().add(titleMap);
		return this;
	}

	/**
	 * 
	 * @return
	 */
	public GraphData build() {

		withLegend();
		if (isStacked) {
			this.withMultiGraph();
		} else {
			this.withGraph();
		}
		if (type.equalsIgnoreCase(ChartType.PIE) || type.equalsIgnoreCase(ChartType.DONUT)) {

			this.data.setTitleField("X0");
			this.data.setValueField("X1");
		} else {
			this.withCategoryField();
			if (type.equalsIgnoreCase(ChartType.BAR)) {

				// this.addBarColor();
				this.data.setRotate(true);
			}
		}
		return data;
	}

	public GraphDataBuilder with3DProperties(boolean is3DEnabled) {
		if (is3DEnabled) {
			this.data.setAngle(30);
			this.data.setDepth3D(15);
		}
		return this;
	}
}
