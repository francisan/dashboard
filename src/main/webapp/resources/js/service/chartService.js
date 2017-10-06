mainApp.service('ChartService', function(ChartServiceFactory) {
	this.drawChart = function(canvasId, reportId) {
		
		return ChartServiceFactory.getDetails(canvasId, reportId);
	}
	
	
});