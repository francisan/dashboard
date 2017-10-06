var chart = AmCharts.makeChart("departmentwise", {
  "type": "pie",
  "startDuration": 0,
   "theme": "light",
  "addClassNames": true,
  "legend":{
   	"position":"right",
    "marginRight":100,
    "autoMargins":false
  },
  "innerRadius": "30%",
  "defs": {
    "filter": [{
      "id": "shadow",
      "width": "200%",
      "height": "200%",
      "feOffset": {
        "result": "offOut",
        "in": "SourceAlpha",
        "dx": 0,
        "dy": 0
      },
      "feGaussianBlur": {
        "result": "blurOut",
        "in": "offOut",
        "stdDeviation": 5
      },
      "feBlend": {
        "in": "SourceGraphic",
        "in2": "blurOut",
        "mode": "normal"
      }
    }]
  },
  "dataProvider": [{
    "country": "General Surgery",
    "litres": 501.9
  }, {
    "country": "General",
    "litres": 301.9
  }, {
    "country": "Star Lifes",
    "litres": 201.1
  }, {
    "country": "Star Vikas",
    "litres": 165.8
  }, {
    "country": "VAT",
    "litres": 139.9
  }, {
    "country": "HNI",
    "litres": 128.3
  }, {
    "country": "Money Back",
    "litres": 99
  }, {
    "country": "Max Life",
    "litres": 60
  }, {
    "country": "Life Time Money Back",
    "litres": 50
  }],
  "valueField": "litres",
  "titleField": "country",
  "export": {
    "enabled": true
  }
});

chart.addListener("init", handleInit);

chart.addListener("rollOverSlice", function(e) {
  handleRollOver(e);
});

function handleInit(){
  chart.legend.addListener("rollOverItem", handleRollOver);
}

function handleRollOver(e){
  var wedge = e.dataItem.wedge.node;
  wedge.parentNode.appendChild(wedge);
}