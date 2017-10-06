(function($){
	$(document).ready(function(){

    	$(".h_downarrow").click(function(){
    		$( ".dropdown-content" ).slideToggle("slow", function() {
    		
    			
    		});//"display", "block");

		});

		$(".dp_downarrow").click(function(){
    		$( ".profile-content" ).slideToggle("slow", function() {
    		
    			
    		});//"display", "block");
    		
		});

		/*$(".myreport, .preference, .helpcenter").hover(
			function(){
    			$( ".dashboard" ).removeClass("dashboard").addClass("dashboard_hover menu_a_hover"); 			
 			    		
			},
			function() {
				
				$( ".dashboard_hover" ).removeClass("dashboard_hover menu_a_hover").addClass("dashboard");
			}
		);*/
		
		
		
		$(".myreport, .preference, .helpcenter").hover(
				function(){
					alert("");
	    			$( ".dashboard" ).removeClass("dashboard").addClass("dashboard_hover menu_a_hover"); 
	    			$( ".selection" ).removeClass("selection");
	    			$( "#"+this.className+"_selection" ).addClass("selection"); 
				}
			);
		
		$( ".dashboard, .myreport, .preference, .helpcenter" ).mouseleave(function() {

			$( ".selection" ).removeClass("selection");
			$( "#dashboard_selection" ).addClass("selection"); 
			
			$( ".dashboard_hover" ).removeClass("dashboard_hover menu_a_hover").addClass("dashboard");
			});
		
		
		
	});

})(jQuery);