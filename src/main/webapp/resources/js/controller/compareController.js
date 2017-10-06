fujiApp
		.controller(
				'CompareController',
				function($scope, $rootScope, $routeParams, ChartServiceFactory) {		
					
					$scope.params = $routeParams;
					console.log('report ID '+$scope.params.reportId)
					if($scope.params.reportId === undefined) {
						$scope.params.reportId = 28;
					}
					$scope.centerList = {};
					$scope.detailedReportList = {};
					
					$scope.centerDetails = [];
					var modalityHeader = [];
					$scope.uniqueModalityHeader = [];
					$scope.selectedCenters = [];
					
					$scope.getCenterList = function() {	
						var url = "center";
						var myDataPromise = ChartServiceFactory.getData(url);
						myDataPromise.then(function(result) {							
							$scope.centerList = result;
							
							for(var i = 0; i < 2; i++) {
								$scope.selectedCenters[$scope.centerList[i].id] = true;
							}
						});
					}
					
					
					
					$scope.drawChart = function() {	
						var url = "drawGraph/"+$scope.params.reportId;				
						var val='';
						if ($('input[type="checkbox"][name="centerCheckbox"]:checked').length > 0) {
							val = $('input[type="checkbox"][name="centerCheckbox"]:checked').map(function() {return  this.value;}).get();
							val = "?filter=hc.id in (" + val+ ")";
						}
						url = url+val;
						var myDataPromise = ChartServiceFactory.getData(url);
						myDataPromise.then(function(result) {							
							var chart = AmCharts.makeChart("chartdiv28", result);
						});
					}
					


					function getStructure() {
						var newValues = {
								center:'',
								values: [ {
									radiologist:'',
									modalities:[]
								}]
							};
						return newValues;
					}
					
					
					

					var centersList = [];
					$scope.createStructure = function(centerName, radName, modalityName, modalityVal) {
						
						
						var newValues = getStructure();
						
						if(centersList.indexOf(centerName) == -1) {
							newValues.center = centerName;
							newValues.values[0].radiologist = radName;
							newValues.values[0].modalities[modalityName] = modalityVal;
							$scope.centerDetails.push(newValues);
							centersList.push(centerName);
						}
						
						Object.values($scope.centerDetails).forEach(function (value) {							
							newValues = getStructure();
							
							
							
							if(value.center == centerName) {	
								var radCount = 0;
								for(var i = 0; i < value.values.length; i++) {
									if(radName === value.values[i].radiologist) {
										value.values[i].modalities[modalityName] = modalityVal;
										radCount++;
									}
								}
								if(radCount == 0) {
									newValues.values[0].radiologist = radName;
									newValues.values[0].modalities[modalityName] = modalityVal;
									value.values[value.values.length] = newValues.values[0];
									
								}
								
								
							}
							
							});
						
						
						
						
					}
					
					$scope.getDetailedReportList = function() {
						
						
						var url = "detailed_report/"+$scope.params.reportId;
						
						
						var val='';
						if ($('input[type="checkbox"][name="centerCheckbox"]:checked').length > 0) {
							val = $('input[type="checkbox"][name="centerCheckbox"]:checked').map(function() {return  this.value;}).get();
							val = "?filter=hc.id in (" + val+ ")";
						}
						url = url+val;
						
						
						
						var myDataPromise = ChartServiceFactory.getData(url);
						myDataPromise.then(function(result) {							
							angular.forEach(result, function(mainValue, mainKey){
								modalityHeader.push(mainValue[2])
								$scope.createStructure(mainValue[0], mainValue[1], mainValue[2], mainValue[3]);	
							   });
								
							$scope.uniqueModalityHeader = modalityHeader.filter((item, pos, ar) => ar.indexOf(item) === pos)
							//$('#example').DataTable();
						});
					}
					$scope.drawChart();
					$scope.getCenterList();
					$scope.getDetailedReportList();
					
					//$('#example').DataTable();
					$scope.comparecenters = function() {
						centersList.length = 0;
						$scope.centerDetails.length = 0;
						$scope.uniqueModalityHeader.length = 0;
						$scope.getDetailedReportList();
						$scope.drawChart();
					}
					
					
				});


