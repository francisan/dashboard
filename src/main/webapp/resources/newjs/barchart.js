var chart = AmCharts.makeChart( "barChart", {
  "type": "serial",
  "theme": "light",
  "depth3D": 20,
  "angle": 30,
  "titles": [ {
    "text": "Patient Wise Modality",
    "size": 16
  } ],
  "legend": {
    "horizontalGap": 10,
    "useGraphSettings": true,
    "markerSize": 10
  },
  "dataProvider": [ {
    "year": "Direct Patient",
    "Count of Modality": 1.5,
    "Sum of Scheduled": 3.5,
    "Sum of Arrived": 4.6,
    
  }, {
    "year": "In Patient",
    "Count of Modality": 2.6,
    "Sum of Scheduled": 3.7,
    "Sum of Arrived": 3.2,
    
  }, {
    "year": "Out Patient",
    "Count of Modality": 5.8,
    "Sum of Scheduled": 1.9,
    "Sum of Arrived": 2.4,
    
  } ],
  "valueAxes": [ {
    "stackType": "regular",
    "axisAlpha": 0,
    "gridAlpha": 0
  } ],
  "graphs": [ {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    
    "lineAlpha": 0.3,
    "title": "Count of Modality",
    "type": "column",
     "newStack": true,
    "color": "#000000",
    "valueField": "Count of Modality"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    
    "lineAlpha": 0.3,
    "title": "Sum of Scheduled",
    "type": "column",
     "newStack": true,
    "color": "#000000",
    "valueField": "Sum of Scheduled"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    
    "lineAlpha": 0.3,
    "title": "Sum of Arrived",
    "type": "column",
    "newStack": true,
    "color": "#000000",
    "valueField": "Sum of Arrived"
  } ],
  "categoryField": "year",
  "categoryAxis": {
    "gridPosition": "start",
    "axisAlpha": 0,
    "gridAlpha": 0,
    "position": "left"
  },
  "export": {
    "enabled": false
  }

} );