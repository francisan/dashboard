fujiApp.controller('DashboardController', function($scope, $rootScope, ChartServiceFactory,
		ReportConstants, $http,$timeout) {

$rootScope.charts = [];
$rootScope.user = {};


	$scope.loadChart = function() {
		console.log('hiiiiiiiiiiiii '+$scope.reportid)
		/**/var typeDetails = ReportConstants.REPORTS[$scope.reportid];
		var url = typeDetails.url;		
		$scope.chartId = $scope.getAllData($scope.name, $scope.reportid, url);
	}
	
	$scope.getAllData = function(canvasId, reportId, url) {	
		var myDataPromise = ChartServiceFactory.getData(url);
		myDataPromise.then(function(result) {
			delete result.legend;
			$scope.createChart(canvasId, reportId, result);
		});
	}

	$scope.createChart = function(canvasId, reportId, data) {
	
		
		var countToBeRemoved = data.dataProvider.length - 2;
		if(countToBeRemoved >= 1) {
			data.dataProvider.splice(0, countToBeRemoved)
		}
		$('#amchartTitle'+reportId).html(data.titles[0].text);
		
		delete data.titles;
		

		
		var chart = AmCharts.makeChart(canvasId, data);
		$rootScope.charts[reportId] = chart;
		
		chart.removeLegend();
		
		
		switch (reportId) {
		case 'REPORT_FOUR':
			/*chart.addListener("clickGraphItem", function(event) {
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
			});*/
			break;
		default:

		}

		
		
		return chart;
	}
	

	
	$scope.showPopUp = function(id) {
		var id = id;
		  var chart = $( "#" + id );
		  var modalamchart = $( "<div>" ).addClass( "modalamchart" );
		  var shade = $( "<div>" ).addClass( "shade" ).appendTo( modalamchart ).on( "click", close );
		  var placeholder = $( "<div>" ).prop( "id", id + "_placeholder" ).insertBefore( chart );
		  $( document.body ).append( modalamchart );
		  chart.appendTo( modalamchart ).addClass( "chart" );
		  console.log($("#chumma"))
		  var headerDiv = $( "<div id='chumma'>" ).addClass("tempcss").appendTo( chart );
		  var reportDiv = $( "<div style='color:#FFFFFF!important'>" ).addClass("zoom").html("Report").appendTo(headerDiv);

		  var reportDiv = $( "<div>" ).addClass("closebutton").html("X").appendTo(headerDiv).on( "click", close );
		  function close() {
		    chart.insertAfter( placeholder ).removeClass( "chart" );
		    placeholder.remove();
		    modalamchart.remove();
		    headerDiv.remove();
		  }
		}
	
	
	
	
	$scope.showPopUpMain = function(obj) {
		$scope.showPopUp(obj.name);
	}
	
	$scope.showPopUpByName = function(canvasId) {
		$scope.showPopUp(canvasId);
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
	

	//$scope.loadChart();
	
	
	
	$scope.pref={};
	
    $scope.getData = function(url) {
   	 $http({
   		    method : "GET",
   		    url: url,
   		    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
   		  }).then(function mySuccess(response) {
   		      $scope.data = response.data;
   		    }, function myError(response) {
   		      $scope.error = response.statusText;
   		      console.log('Error-------- ' +  $scope.error);
   		  });
	};
	



$scope.resetWidgets = function() {
	
	
	var pref;
	 
	 $http({
		    method : "GET",
		    url: 'dashboard_config/all_widgets',
		    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		  }).then(function mySuccess(response) {
		      pref = response.data;
		      $scope.showWidgets(pref);
		    }, function myError(response) {
		      $scope.error = response.statusText;
		      console.log('Error-------- ' +  $scope.error);
		  });
    	
  	
	 
    	
    	
		
	};
	 $scope.resetReports = function() {
	    	
	    	var pref;
	    	
	    	$http({
			    method : "GET",
			    url: 'dashboard_config/all_reports',
			    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			  }).then(function mySuccess(response) {
			      pref = response.data;
			      $scope.showReports(pref);
			    }, function myError(response) {
			      $scope.error = response.statusText;
			      console.log('Error-------- ' +  $scope.error);
			  });
			
		};
	
	$scope.resetWidgets();
	$scope.resetReports();
	
	
	$scope.showWidgets = function(pref) {
		
		
		
		pref.forEach(function(item){
		    console.log(item.title + ' ' + item.selected);
		    if(item.title=="Studies Performed" && item.selected==true)
			{
		    	$scope.pref.STUDIES_PERFORMED = true;
		    	
			}
		    if(item.title=="Studies Performed" && item.selected==false)
		    {
		    	$scope.pref.STUDIES_PERFORMED = false;
			}
		    	
		    if(item.title=="Studies Pending" && item.selected==true)
			{
		    	$scope.pref.STUDIES_PENDING = true;
			}
		    if(item.title=="Studies Pending" && item.selected==false)
		    {
		    	$scope.pref.STUDIES_PENDING = false;
			}
		   
		   
		    if(item.title=="Emergency Cases" && item.selected==true)
			{
		    	$scope.pref.EMERGENCY_CASES = true;
			}
		    if(item.title=="Emergency Cases" && item.selected==false)
		    {
		    	$scope.pref.EMERGENCY_CASES = false;
			}
		    
		    if(item.title=="Equipment Changed Numbers" && item.selected==true)
			{
		    	$scope.pref.EQUIPMENT_CHANGED_NUMBERS = true;
			}
		    if(item.title=="Equipment Changed Numbers" && item.selected==false)
		    {
		    	$scope.pref.EQUIPMENT_CHANGED_NUMBERS = false;
			}
		    
		        	    
		});
		
		$timeout(function(){
			 $(".chartDivs").each(function() {
					$(this).click(function() {
						modal.style.display = "block";
					});
				});
		
			},0,false);
	};
	
	
	
$scope.showReports = function(pref) {
		
		pref.forEach(function(item){
		    console.log(item.name + ' ' + item.selected);
		    if(item.name=="Center wise Total Patient" && item.selected==true)
			{
		    	$scope.pref.report1 = true;
		    	
			}
		    if(item.name=="Center wise Total Patient" && item.selected==false)
		    {
		    	$scope.pref.report1 = false;
			}
		    	
		    if(item.name=="Department wise Patient" && item.selected==true)
			{
		    	$scope.pref.report2 = true;
			}
		    if(item.name=="Department wise Patient" && item.selected==false)
		    {
		    	$scope.pref.report2 = false;
			}
		   
		   
		    if(item.name=="Modality Wise Studies Completed Finalized Today" && item.selected==true)
			{
		    	$scope.pref.report9 = true;
			}
		    if(item.name=="Modality Wise Studies Completed Finalized Today" && item.selected==false)
		    {
		    	$scope.pref.report9 = false;
			}
		    
		    if(item.name=="Modality Wise Studies Completed Finalized Yesterday" && item.selected==true)
			{
		    	$scope.pref.report10 = true;
			}
		    if(item.name=="Modality Wise Studies Completed Finalized Yesterday" && item.selected==false)
		    {
		    	$scope.pref.report10 = false;
			}
		    
		        	    
		});
		
		$timeout(function(){
			 console.log("Running after the digest cycle");
			 $(".chartDivs").each(function() {
					$(this).click(function() {
						modal.style.display = "block";
					});
				});
		
			},0,false);
	};

	
});






