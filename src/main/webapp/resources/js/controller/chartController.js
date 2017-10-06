var sree1 = '';
mainApp.controller("ChartController", function($scope, ChartServiceFactory,
		ReportConstants, $http) {

	$scope.loadChart = function() {
		/**/var typeDetails = ReportConstants.REPORTS[$scope.reportid];
		var years = '2016,2017';
		var modalities = "NO_VAL";
		var url = typeDetails.url;
		if ($scope.reportid == "REPORT_FOUR") {
			years = '';
			modalities = '';
		} 
		if ($scope.reportid == "REPORT_FIVE") {
			modalities = 'CT';
		} 
		
	/*	if($scope.reportid == "REPORT_SEVEN") {
			ChartServiceFactory.createPatientModalityChart($scope.name);
		}
		if($scope.reportid == "REPORT_EIGHT") {
			ChartServiceFactory.createAmendmendByUserChart($scope.name);
		}*/
		
			
		$scope.chartId = $scope.getData($scope.name, $scope.reportid, years,
				modalities, url);
	}

	$scope.getData = function(canvasId, reportId, years, modalities, url) {
		url = (modalities == '') ? url + "/" + years : url = url + "/" + years+ "/" + modalities
		
				console.log('URL >>> '+url)
		$http({
			method : "GET",
			url : url
		}).then(function mySuccess(response) {
			$scope.createChart(canvasId, reportId, response.data);
		}, function myError(response) {
			return response.statusText;
		});
	}

	$scope.createChart = function(canvasId, reportId, data) {
		if(reportId == "REPORT_FOUR") {
			delete data.marginRight;
			delete data.dataDateFormat;
			delete data.chartCursor;
		}
		
		
		
		//console.log(data);
		
		
		
		
		var chart = AmCharts.makeChart(canvasId, data);
		if(reportId == "REPORT_FIVE" || reportId == "REPORT_SIX") {
			chart.removeLegend();
		}
		
		
		switch (reportId) {
		case 'REPORT_FOUR':
			chart.addListener("clickGraphItem", function(event) {
				var typeDetails = ReportConstants.REPORTS["REPORT_FIVE"];
				var years = event.item.category;
				var modalities = event.graph.valueField;
				
				$scope.getData(typeDetails.name, "REPORT_FIVE", years,
						modalities, typeDetails.url);
				
				typeDetails = ReportConstants.REPORTS["REPORT_SIX"];
				$scope.getData(typeDetails.name, "REPORT_SIX", years,
						"NO_VAL", typeDetails.url);
				
				typeDetails = ReportConstants.REPORTS["REPORT_SEVEN"];
				$scope.getData(typeDetails.name, "REPORT_SEVEN", years,
						"NO_VAL", typeDetails.url);
			});
			break;
		default:

		}

		return chart;
	}
	

	
	$scope.showPopUpMain = function(obj) {
		ChartServiceFactory.showPopUp(obj.name);
	}
	
	$scope.showPopUpByName = function(canvasId) {
		ChartServiceFactory.showPopUp(canvasId);
	}
	
	$scope.getChart = function(id) {
	    var allCharts = AmCharts.charts;
	    for (var i = 0; i < allCharts.length; i++) {
	        if (id == allCharts[i].div.id) {
	            return allCharts[i];
	        }
	    }
	}
	
	$scope.showPopUpDataTable = function(canvasId) {
		ChartServiceFactory.showPopUp(canvasId);
		var chart = $scope.getChart(canvasId);
		
     	var placeholder = $( "<div>" ).prop( "id", "chartdata" ).insertAfter($( "#" + canvasId) );
		
		
		ChartServiceFactory.createTableForChart(chart);
	}
	

	$scope.loadChart();
	console.log('Should display last')

});
