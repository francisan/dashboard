	function drawCharts(chartData) {
	var monthlyExamChartLabels = [];
	var monthlyExamChartValues = [];	
	$.each($.parseJSON(chartData).monthlyExamChartValues, function(idx, obj) {
		monthlyExamChartLabels.push(obj.months);
		monthlyExamChartValues.push(obj.examCount);
	});
	
	/*console.log('chartLabels  '+chartLabels);
	console.log('chartValues  '+chartValues);*/
	
	var monthlyExamdata = {
			  labels: monthlyExamChartLabels,
			  datasets: [{
			    label: "Monthly Exams Count",
			    backgroundColor: "rgba(255,99,132,0.2)",
			    borderColor: "rgba(255,99,132,1)",
			    borderWidth: 1,
			    hoverBackgroundColor: "rgba(255,99,132,0.4)",
			    hoverBorderColor: "rgba(255,99,132,1)",
			    data: monthlyExamChartValues,
			  }]
			};

			var options = {
			  maintainAspectRatio: false,
			  scales: {
			    yAxes: [{
			      stacked: true,
			      gridLines: {
			        display: true,
			        color: "rgba(255,99,132,0.2)"
			      }
			    }],
			    xAxes: [{
			      gridLines: {
			        display: false
			      }
			    }]
			  }
			};

			Chart.Bar('monthlyExamChart', {
			  options: options,
			  data: monthlyExamdata
			});
			
			
			
			var annualProductionModalityLabels = [];
			var annualProductionFirstYear = '';
			var annualProductionSecondYear = '';
			var annualProductionFirstYearValues = [];
			var annualProductionSecondYearValues = [];
			
			$.each($.parseJSON(chartData).annualProductionChartValues, function(idx, obj) {
				annualProductionModalityLabels.push(obj.modality);
				annualProductionFirstYearValues.push(obj.firstYearValue);
				annualProductionSecondYearValues.push(obj.secondYearValue);
				annualProductionFirstYear = obj.firstYear;
				annualProductionSecondYear = obj.secondYear;
			});
			/**/
					
			
	
			
/*	*/		
			var annualProductionData = {
				    labels: annualProductionModalityLabels,
				    datasets: [ {
			          label: annualProductionFirstYear,
			          backgroundColor: "red",
			          data: annualProductionFirstYearValues
			        },
			        {
			          label: annualProductionSecondYear,
			          backgroundColor: "blue",
			          data: annualProductionSecondYearValues
			        }
			      ]
				};

			
			Chart.Bar('monthlyExamChart1', {
				options: {
			        barValueSpacing: 3,
			        scales: {
			            yAxes: [{
			                ticks: {
			                    min: 0,
			                }
			            }],
			            title: {
			        display: true,
			        text: 'Population growth (millions)'
			      }
			        }
			    },
				  data: annualProductionData
				});
			
			
			
			
			
			
			
		/*	new Chart(document.getElementById("monthlyExamChart1"), {
			    type: 'bar',
			    data: {
			      labels: ["CR", "CT", "MR", "MG", "US", "RF", "IO"],
			      datasets: [ {
			          label: "2000",
			          backgroundColor: "red",
			          data: [408,547,675,734]
			        },
			        {
			          label: "2016",
			          backgroundColor: "blue",
			          data: [133,221,783,2478]
			        }
			      ]
			    },
			    options: {
			      title: {
			        display: true,
			        text: 'Population growth (millions)'
			      }
			    }
			});*/
			
			
			
			
			

}
	
	function addAnnualProductionData(chart, label, data) {
	    chart.data.labels.push(label);
	    chart.data.datasets.forEach((dataset) => {
	        dataset.data.push(data);
	    });
	    chart.update();
	}

