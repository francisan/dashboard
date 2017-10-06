var sree = '';


var sree='';

$(document).ready(function() {
	      connect();

/*
 * function connect(){ var socket; var host = "ws://localhost:8080/chartdata";
 * 
 * try{ var socket = new WebSocket(host); socket.onopen = function(){ $.ajax({
 * url: 'ping', //data: 'url=/www.stackoverflow.om', type: 'GET',
 * 
 * contentType: 'application/json; charset=utf-8', success: function (data,
 * textStatus, xhr) { console.log(xhr.status); }, error: function (data,
 * textStatus, xhr) { console.log(data.responseText); } }) }
 * 
 * socket.onmessage = function(msg){ sree = msg; console.log('onmessage
 * '+msg.data) drawCharts(msg.data); }
 * 
 * socket.onclose = function(){ message('<p class="event">Socket Status:
 * '+socket.readyState+' (Closed)'); }
 *  } catch(exception){ message('<p>Error'+exception); }
 */
	        	  
	        	  
	        	function connect(){
	        		
	        		
	        		 $.ajax({url: "http://localhost:8080/api/chartdata",type: 'GET', success: function(data){
	        			 console.log(data);
	        			 drawCharts(data);
	        		    }
	        		 ,error: function (data, textStatus, xhr) {
	                      alert(data.responseText);
	                  }
	        		 });
	        		 
	        		 
	        	 /* $.ajax({
	                  url: 'ping',
	                  data: 'url=http://localhost:8080/graph',
	                  type: 'GET',

	                  contentType: 'application/json; charset=utf-8',
	                  success: function (data, textStatus, xhr) {
	                      alert(xhr.status);
	                      drawCharts(msg.data);
	                  },
	                  error: function (data, textStatus, xhr) {
	                      alert(data.responseText);
	                  }
	              })*/
	        	}
	});