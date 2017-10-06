
function onpopup(id,value){
	var temp = {};
	$("#loader").show();
	$(".chartOverlay").show();
	//$('.modal-header').prepend($('<div class="modal-body" id="'+id+'">  </div>'));
	$('<div class="modal-body" id="'+id+'">   </div>').insertAfter(".modal-header");
	
	if(value=="chart_value_1"){
		
		$.ajax({
			  dataType: "json",
			  url: "/drawGraph/16",
			  success: function(data){
				  
				  temp = data;
				  
				  AmCharts.makeChart(id, temp);
				  $("#loader").fadeOut();
				  $(".chartOverlay").fadeOut();
				  
				 
			  }
			});
	}
	else if(value=="chart_value_2"){
		$.ajax({
			  dataType: "json",
			  url: "/drawGraph/18",
			  success: function(data){
				  
				  temp = data;
				  
				  AmCharts.makeChart(id, temp);
				  $("#loader").fadeOut();
				  $(".chartOverlay").fadeOut();
				  
			  }
			});
	}
	else if(value=="chart_value_3"){
		$.ajax({
			  dataType: "json",
			  url: "/drawGraph/28",
			  success: function(data){
				  
				  temp = data;
				  
				  AmCharts.makeChart(id, temp);
				  $("#loader").fadeOut();
				  $(".chartOverlay").fadeOut();
			  }
			});
	}
	else if(value=="chart_value_3"){
		$.ajax({
			  dataType: "json",
			  url: "/drawGraph/17",
			  success: function(data){
				  
				  temp = data;
				  
				  AmCharts.makeChart(id, temp);
				  $("#loader").fadeOut();
				  $(".chartOverlay").fadeOut();
				  
			  }
			});
	}
	else if(value=="chart_value_4"){
		$.ajax({
			  dataType: "json",
			  url: "/drawGraph/19",
			  success: function(data){
				  
				  temp = data;
				  
				  AmCharts.makeChart(id, temp);
				  $("#loader").fadeOut();
				  $(".chartOverlay").fadeOut();
				  
				 
			  }
			});
	}
	
	else if(value=="chart_value_5"){
		console.log("this is 5=="+id+"------"+value);
		$.ajax({
			  dataType: "json",
			  url: "/drawGraph/28",
			  success: function(data){
				  
				  temp = data;
				  
				  AmCharts.makeChart(id, temp);
				  $("#loader").fadeOut();
				  $(".chartOverlay").fadeOut();

				  var r= $('<div class="reportButton"><a  class="btn btn-info" href="#!customreports/28" style="color: white">Report</a></div>');
			        $(".amcharts-main-div").append(r);
			  }
			});
	}
	
	else if(value=="chart_value_6"){
		console.log("this is 6 =="+id+"------"+value);
		$.ajax({
			  dataType: "json",
			  url: "/drawGraph/29",
			  success: function(data){
				  temp = data;
				  AmCharts.makeChart(id, temp);
				  $("#loader").fadeOut();
				  $(".chartOverlay").fadeOut();

				  var r= $('<div class="reportButton"><a href="#!customreports/29"  class="btn btn-info" style="color: white">Report</a></div>');
			        $(".amcharts-main-div").append(r);
			  }
			});
	}
}