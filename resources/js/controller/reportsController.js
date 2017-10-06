var sree3 = '';
fujiApp
		.controller(
				'ReportController',
				function($scope, $rootScope, $routeParams, ReportConstants,
						ChartServiceFactory) {
					
					
					/*$scope.params = $routeParams;
					$scope.chartObj = angular
							.copy($rootScope.charts[$scope.params.reportId]);

					$("#startDate").datepicker({
					      dateFormat: 'yy-mm-dd'
					});
					$("#endDate").datepicker({
					      dateFormat: 'yy-mm-dd'
					});*/

					$scope.showPopUp = function(id) {
						var id = id;
						var chart = $("#" + id);
						var modalamchart = $("<div>").addClass("modalamchart");
						var shade = $("<div>").addClass("shade").appendTo(
								modalamchart).on("click", close);
						var placeholder = $("<div>").prop("id",
								id + "_placeholder").insertBefore(chart);
						$(document.body).append(modalamchart);
						chart.appendTo(modalamchart).addClass("chart");
						console.log($("#chumma"))
						var headerDiv = $("<div id='chumma'>").addClass(
								"tempcss").appendTo(chart);
						var reportDiv = $(
								"<div style='color:#FFFFFF!important'>")
								.addClass("zoom").html("Report").appendTo(
										headerDiv);

						var reportDiv = $("<div>").addClass("closebutton")
								.html("X").appendTo(headerDiv).on("click",
										close);
						function close() {
							chart.insertAfter(placeholder).removeClass("chart");
							placeholder.remove();
							modalamchart.remove();
							headerDiv.remove();
						}
					}

					$scope.loadTable = function(chartObject) {
						// check if export to table is enabled
						if (chartObject.dataTableId === undefined)
							return;

						// get chart data
						var data = chartObject.dataProvider;

						// create a table
						var holder = document.getElementById("chartDataDiv");
						var table = document.createElement("table");
						table.width = "100%";
						holder.appendChild(table);
						var tr, td, th;

						tr = document.createElement("tr");
						table.appendChild(tr);
						th = document.createElement("th");
						th.innerHTML = '';
						tr.appendChild(th);
						console.log('chartObject.graphs.length  '+ chartObject.graphs.length)
						console.log(chartObject.graphs)

						console.log('chartObject.graphs.length  '+ chartObject.dataProvider.length)
						console.log(chartObject.dataProvider)
						for (var i = 0; i < chartObject.graphs.length; i++) {
							th = document.createElement("th");
							th.innerHTML = chartObject.graphs[i].title;
							tr.appendChild(th);

						}

						for (var i = 0; i < chartObject.dataProvider.length; i++) {
							var dataProvider = chartObject.dataProvider[i];

							
							
							
							
							tr = document.createElement("tr");
							table.appendChild(tr);
							td = document.createElement("td");
							td.innerHTML = dataProvider["X0"];
							tr.appendChild(td);
							
							if(chartObject.graphs.length == 0) {
								Object.keys(dataProvider).forEach(function(key,index) {
								    if(key != 'X0') {
								    	td = document.createElement("td");
								    	td.innerHTML = dataProvider[key];
										tr.appendChild(td);
								    }
								    
								});
							} else {
								for (var j = 0; j < chartObject.graphs.length; j++) {
									console.log('chartObject.graphs[j].valueField >> ' + chartObject.graphs[j].title);
									td = document.createElement("td");
									td.innerHTML = dataProvider[chartObject.graphs[j].valueField] == undefined ? ''
											: dataProvider[chartObject.graphs[j].valueField];
									tr.appendChild(td);

								}
							}
							
							
							

							

						}

					};

					function showOnly(valuefield) {
						var new_data = [];
						var category_field = "X0"; // always include this

						for (var i = 0; i < chartData.length; i++) {
							var filtered_item = {};
							filtered_item[category_field] = chartData[i][category_field];
							filtered_item[valuefield] = chartData[i][valuefield];
							new_data.push(filtered_item);
						}
						chart.dataProvider = new_data;
						chart.validateData();

					}

					$scope.search = function() {
						var typeDetails = ReportConstants.REPORTS[$scope.params.reportId
								+ '_REPORT'];
						var url = typeDetails.url;
						var reqURL = "";
						switch ($scope.params.reportId) {
						case 'REPORT_FOUR':
							var dateRange = "date_time between '"
									+ $('#startDate').val() + "' and '"
									+ $('#endDate').val() + "'";
							var modalities = "";
							if ($('input[type="checkbox"][name="modality"]:checked').length > 0) {
								modalities = $(
										'input[type="checkbox"][name="modality"]:checked')
										.map(function() {
											return "'" + this.value + "'";
										}).get();
								modalities = " and m.name in (" + modalities
										+ ")";
							}
							reqURL = url + "?filters=" + dateRange + modalities;
							break;
						case 'REPORT_ELEVEN':
							var dateRange = "admission_date_time between '"
									+ $('#startDate').val() + "' and '"
									+ $('#endDate').val() + "'";
							reqURL = url + "?filters=" + dateRange
									+ " and c.name in('"
									+ $("#selectedLocation").val() + "')";
							break;
							
						case 'REPORT_THIRTEEN':
						case 'REPORT_FIFTEEN':
							var dateRange = "admission_date_time between '"
									+ $('#startDate').val() + "' and '"
									+ $('#endDate').val() + "'";
							reqURL = url + "?filters=" + dateRange;
							break;
						default:

						}
						$("#chartDataDiv").html("");
						$scope.getData('chartdiv1', $scope.reportid, reqURL);

					}

					$scope.getData = function(canvasId, reportId, reqURL) {
						var myDataPromise = ChartServiceFactory.getData(reqURL);
						myDataPromise.then(function(result) {
							var chart = AmCharts.makeChart(canvasId, result);
							$scope.loadTable(chart);
						});

					}

					$scope.loadChart = function() {
						var typeDetails = ReportConstants.REPORTS[$scope.params.reportId];
						var url = typeDetails.url;
						chart = ChartServiceFactory.getData(url);
						var myDataPromise = ChartServiceFactory.getData(url);
						myDataPromise
								.then(function(result) {

									if ($scope.params.reportId == 'REPORT_FIFTEEN') {
										result['innerRadius'] = '60%';
									}
									
									
									var chart = AmCharts.makeChart("chartdiv1",
											result);
									
								/*	chart.addListener("rendered", function(event) {
										var curtain = document.getElementById("curtain");
									      curtain.parentElement.removeChild(curtain);
									});*/
									
									if ($scope.params.reportId == 'REPORT_ELEVEN') {
										chart.removeLegend();
									}
									
									$scope.loadTable(chart);									
									$("#chartDataTitle").html("<p>"+chart.titles[0].text+"</p>");
									
									

								});
					}

					//$scope.loadChart();
					
					
					/****** STATIC CODES ARE STARTING FROM HERE ******/
					
				
					var studyCompletionDateGridIndex = 14;
					function initaliazeGrid() {

						try {
							var t = "";
							$.each(data, function(i, v) {
								t += '<tr><td>' + v.radiologist + '</td><td>'
										+ v.centre + '</td><td>' + v.procedure + '</td><td>'
										+ v.modality + '</td><td>' + v.total + '</td><td>'
										+ v.pendingRpt + '</td><td>' + v.normal + '</td><td>'
										+ v.abnormal + '</td><td>' + v.preliminary
										+ '</td><td>' + v.finalized + '</td><td>' + v.addendum
										+ '</td><td>' + v.defined + '</td><td>' + v.normalRpt
										+ '</td><td>' + v.abnormalRpt + '</td><td>'
										+ v.studyCompletionDate + '</td></tr>';
							});
							//alert(t)
							$('#example tbody').append(t);
						} catch (e) {
							alert(e)
						}

					}
					var data = [ {
						"slNo" : "1",
						"radiologist" : "Dr. Jhon Peter",
						"centre" : "Alminas",
						"procedure" : "XR chest",
						"modality" : "CR",
						"total" : "34",
						"pendingRpt" : "54",
						"normal" : "14",
						"abnormal" : "10",
						"preliminary" : "6",
						"finalized" : "2",
						"addendum" : "1",
						"defined" : "1",
						"normalRpt" : "5",
						"abnormalRpt" : "6",
						"studyCompletionDate" : "2015/09/13"
					},
					             {
						"slNo" : "1",
						"radiologist" : "Dr. George Mathew",
						"centre" : "Alminas",
						"procedure" : "XR chest",
						"modality" : "CR",
						"total" : "32",
						"pendingRpt" : "24",
						"normal" : "27",
						"abnormal" : "1",
						"preliminary" : "1",
						"finalized" : "1",
						"addendum" : "1",
						"defined" : "1",
						"normalRpt" : "5",
						"abnormalRpt" : "6",
						"studyCompletionDate" : "2015/09/13"
					},{
						"slNo" : "1",
						"radiologist" : "Dr. Jhon Peter",
						"centre" : "KIMS",
						"procedure" : "XR chest",
						"modality" : "CR",
						"total" : "55",
						"pendingRpt" : "22",
						"normal" : "50",
						"abnormal" : "1",
						"preliminary" : "1",
						"finalized" : "1",
						"addendum" : "1",
						"defined" : "1",
						"normalRpt" : "5",
						"abnormalRpt" : "6",
						"studyCompletionDate" : "2015/09/13"
					},
					{
						"slNo" : "1",
						"radiologist" : "Dr. Dizooza",
						"centre" : "Alminas",
						"procedure" : "XR chest",
						"modality" : "CR",
						"total" : "24",
						"pendingRpt" : "54",
						"normal" : "4",
						"abnormal" : "16",
						"preliminary" : "1",
						"finalized" : "1",
						"addendum" : "1",
						"defined" : "1",
						"normalRpt" : "5",
						"abnormalRpt" : "6",
						"studyCompletionDate" : "2015/09/13"
					}, {
						"slNo" : "2",
						"radiologist" : "Dr. George Mathew",
						"centre" : "KIMS",
						"procedure" : "XR chest",
						"modality" : "CT",
						"total" : "36",
						"pendingRpt" : "4",
						"normal" : "6",
						"abnormal" : "6",
						"preliminary" : "6",
						"finalized" : "6",
						"addendum" : "6",
						"defined" : "6",
						"normalRpt" : "5",
						"abnormalRpt" : "5",
						"studyCompletionDate" : "2014/09/13"
					}, {
						"slNo" : "3",
						"radiologist" : "Dr. Fernandaz Augustin",
						"centre" : "KIMS",
						"procedure" : "CT Head",
						"modality" : "CT",
						"total" : "36",
						"pendingRpt" : "4",
						"normal" : "6",
						"abnormal" : "6",
						"preliminary" : "6",
						"finalized" : "6",
						"addendum" : "6",
						"defined" : "6",
						"normalRpt" : "5",
						"abnormalRpt" : "5",
						"studyCompletionDate" : "2019/09/13"
					}, {
						"slNo" : "4",
						"radiologist" : "Dr. Albin Jacob",
						"centre" : "KIMS",
						"procedure" : "CT Head",
						"modality" : "CT",
						"total" : "48",
						"pendingRpt" : "4",
						"normal" : "8",
						"abnormal" : "8",
						"preliminary" : "8",
						"finalized" : "8",
						"addendum" : "8",
						"defined" : "8",
						"normalRpt" : "5",
						"abnormalRpt" : "5",
						"studyCompletionDate" : "2017/09/13"
					}, {
						"slNo" : "5",
						"radiologist" : "Dr. Gonzalvas",
						"centre" : "Alminas",
						"procedure" : "CT Head",
						"modality" : "CT",
						"total" : "30",
						"pendingRpt" : "4",
						"normal" : "1",
						"abnormal" : "1",
						"preliminary" : "1",
						"finalized" : "5",
						"addendum" : "11",
						"defined" : "11",
						"normalRpt" : "5",
						"abnormalRpt" : "5",
						"studyCompletionDate" : "2016/09/13"
					} ]
					
					Date.prototype.isValid = function() {
						// An invalid date object returns NaN for getTime() and NaN is the only
						// object not strictly equal to itself.
						return this.getTime() === this.getTime();
					};
					
						$("#min").datepicker({
							dateFormat : 'yy/mm/dd'
						});
						$("#max").datepicker({
							dateFormat : 'yy/mm/dd'
						});
						initaliazeGrid();

						var t = $('#example').DataTable({
							"scrollX": true,
							"pageLength": 6,		
							//"searching": false,
							//"dom": '<"top"i>rt<"bottom"flp><"clear">',
							"bPaginate" : true,
							"bFilter" : true,
							"bInfo" : false,
							"ordering" : false,
							"dom" : '<"top"i>rt<"bottom"flp><"clear">',
							"columnDefs" : [ {
								"searchable" : true,
								"orderable" : false,
								"targets" : 0
							}, {
								"targets" : [ studyCompletionDateGridIndex ],
								"visible" : false,
								"searchable" : true
							} ],
							"order" : [ [ 1, 'asc' ] ]
						});
						$('#example_filter').hide();
						
/*
						t.on('order.dt search.dt', function() {
							t.column(0, {
								search : 'applied',
								order : 'applied'
							}).nodes().each(function(cell, i) {
								cell.innerHTML = i + 1;
							});
						}).draw();
					*/

					$.fn.dataTable.ext.search.push(function(settings, data, dataIndex) {
						var modalityColumnIndex = 3;
						var radilogistColumnIndex = 0;
						var returnType = false;
						var radiologistFilterValue = $('#txtRadiologist').val();
						var radiologistGridValue = data[radilogistColumnIndex];
						try {

							if (radiologistGridValue.toLowerCase().search(
									radiologistFilterValue.toLowerCase()) != 0) {
								return false;
							}

							var min = $('#min').val();
							var modality = $('#modality option:selected').val();
							//alert(modality)
							var max = $('#max').val();
							if (min == '' || max == '') {
								returnType = true;
							}
							var tableDate = new Date(data[studyCompletionDateGridIndex]);
							var inputStartDate = new Date($('#min').val());
							var inputEndDate = new Date($('#max').val());
							//alert(data[15])
							if ((inputStartDate <= tableDate) && (inputEndDate >= tableDate)) {
								returnType = true;
							} else {
								if (inputStartDate.isValid() && inputStartDate.isValid()) {
									return false;
								}
							}

							if (data[modalityColumnIndex] == modality || modality == 'ALL') {
								returnType = true;
							} else {
								returnType = false;
							}
						} catch (e) {
							alert(e);
						}

						return returnType;
					});
					
					
					$scope.changeDate = function() {
						try {
							var table = $('#example').DataTable();
							table.draw();
						} catch (e) {
							alert(e)
						}

					}
					
					
					
					var chart = AmCharts.makeChart("chartdiv28",{
						"titles": [{
							"text": "Modality Wise Studies Performed"
						}],
						"legend": {
							"marginRight": 0,
							"position": "right"
						},
						"type": "serial",
						"theme": "light",
						"dataTableId": "chartdata",
						"rotate": false,
						"marginRight": 0,
						"dataDateFormat": null,
						"chartCursor": {},
						"pulledField": "pulled",
						"dataProvider": [{
											"X0" : "Dr. Jhon <br>Peter <br> Alminas",
											"procedure" : "XR chest",
											"modality" : "CR",
											"total" : "34",
											"pendingRpt" : "54",
											"normal" : "14",
											"abnormal" : "10",
											"preliminary" : "6",
											"finalized" : "2",
											"addendum" : "1",
											"defined" : "1"
										},
										             {
											"X0" : "Dr. George<br>Mathew <br>Alminas",
											"procedure" : "XR chest",
											"modality" : "CR",
											"total" : "32",
											"pendingRpt" : "24",
											"normal" : "27",
											"abnormal" : "1",
											"preliminary" : "1",
											"finalized" : "1",
											"addendum" : "1",
											"defined" : "1"
										},{
											"X0" : "Dr. Jhon<br>Peter <br>KIMS",
											"procedure" : "XR chest",
											"modality" : "CR",
											"total" : "35",
											"pendingRpt" : "22",
											"normal" : "30",
											"abnormal" : "1",
											"preliminary" : "1",
											"finalized" : "1",
											"addendum" : "1",
											"defined" : "1"
										},
										{
											"X0" : "Dr. Dizooza<br>Alminas",
											"procedure" : "XR chest",
											"modality" : "CR",
											"total" : "24",
											"pendingRpt" : "54",
											"normal" : "4",
											"abnormal" : "16",
											"preliminary" : "1",
											"finalized" : "1",
											"addendum" : "1",
											"defined" : "1"
										}, {
											"X0" : "Dr. George<br>Mathew<br>KIMS",
											"procedure" : "XR chest",
											"modality" : "CT",
											"total" : "36",
											"pendingRpt" : "4",
											"normal" : "6",
											"abnormal" : "6",
											"preliminary" : "6",
											"finalized" : "6",
											"addendum" : "6",
											"defined" : "6"
										}, {
											"X0" : "Dr. Fernandaz<br>Augustin<br>KIMS",
											"procedure" : "CT Head",
											"modality" : "CT",
											"total" : "36",
											"pendingRpt" : "4",
											"normal" : "6",
											"abnormal" : "6",
											"preliminary" : "6",
											"finalized" : "6",
											"addendum" : "6",
											"defined" : "6"
										}, {
											"X0" : "Dr. Albin<br>Jacob<br>KIMS",
											"procedure" : "CT Head",
											"modality" : "CT",
											"total" : "48",
											"pendingRpt" : "4",
											"normal" : "8",
											"abnormal" : "8",
											"preliminary" : "8",
											"finalized" : "8",
											"addendum" : "8",
											"defined" : "8"
										}, {
											"X0" : "Dr. Gonzalvas<br>Alminas",
											"procedure" : "CT Head",
											"modality" : "CT",
											"total" : "30",
											"pendingRpt" : "4",
											"normal" : "1",
											"abnormal" : "1",
											"preliminary" : "1",
											"finalized" : "5",
											"addendum" : "11",
											"defined" : "11"
										}],
						"valueAxes": [],
						"graphs": [{
							"type": "column",
							"title": "normal",
							"valueField": "normal",
							"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
							"lineAlpha": 0.3,
							"fillAlphas": 0.8
						}, {
							"type": "column",
							"title": "abnormal",
							"valueField": "abnormal",
							"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
							"lineAlpha": 0.3,
							"fillAlphas": 0.8
						}, {
							"type": "column",
							"title": "preliminary",
							"valueField": "preliminary",
							"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
							"lineAlpha": 0.3,
							"fillAlphas": 0.8
						}, {
							"type": "column",
							"title": "finalized",
							"valueField": "finalized",
							"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
							"lineAlpha": 0.3,
							"fillAlphas": 0.8
						}, {
							"type": "column",
							"title": "addendum",
							"valueField": "addendum",
							"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
							"lineAlpha": 0.3,
							"fillAlphas": 0.8
						}],
						"categoryField": "X0",
						"categoryAxis": {
							"gridPosition": "start",
							"labelRotation": 0
						},
						"valueField": null,
						"titleField": null,
						"depth3D": 0,
						"angle": 0
					});

				});