var chart = AmCharts.makeChart( "pieChart", {
  "type": "pie",
  "theme": "light",
  "titles": [ {
    "text": "Amendment by user",
    "size": 16
  } ],
  "legend":{
    "position":"bottom",
    "marginRight":100,
    "autoMargins":false
  },
  "dataProvider": [ {
    "country": "Radiologist 1",
    "visits": 7252
  }, {
    "country": "Radiologist 2",
    "visits": 3882
  }, {
    "country": "Radiologist 3",
    "visits": 1809
  } ],
  "valueField": "visits",
  "titleField": "country",
  "startEffect": "elastic",
  "startDuration": 2,
  "labelRadius": 15,
  "innerRadius": "50%",
  "depth3D": 10,
  "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
  "angle": 15,
  "export": {
    "enabled": false
  }
} );