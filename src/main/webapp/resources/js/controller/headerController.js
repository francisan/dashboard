var qq='';
fujiApp.controller('HeaderController', function($scope, $rootScope, $attrs,$timeout) {
	
	$rootScope.user = {};
	$scope.user = {};
	$rootScope.user.role = localStorage.getItem('user_role');
	$scope.user = $rootScope.user ;
	if($attrs.selected === 'dashboard') {
		$( "#dashboard" ).removeClass().addClass("dashboard_hover"); 
	}
	
	
	$scope.settingFocus = function() {
		$("#menu span").each(function(index, elem){
		    $("#"+elem.id).removeClass().addClass(elem.id);
		});
		
		$( "#"+$attrs.selected ).removeClass().addClass($attrs.selected+"_hover"); 		
		$( ".selection" ).removeClass("selection");
		$( "#"+$attrs.selected+"_selection" ).addClass("selection"); 
		}
	
	$scope.settingFocus();

	$(".h_downarrow").click(function(){
		$( ".dropdown-content" ).slideToggle("slow", function() {
		
			
		});

	});

	$(".dp_downarrow").click(function(){
		$( ".profile-content" ).slideToggle("slow", function() {
		
			
		});//"display", "block");
		
	});
	
	$timeout(function(){
		 
		 $(".dashboard, .myreport, .preference, .helpcenter, .compare").hover(
					function(){	
						
						$("#menu span").each(function(index, elem){
						    $("#"+elem.id).removeClass().addClass(elem.id);
						});

		    			$( "#"+this.id ).removeClass().addClass(this.id+"_hover"); 
		    			
		    			$( ".selection" ).removeClass("selection");
		    			
		    			$( "#"+this.id+"_selection" ).addClass("selection"); 
					}
				);
		 
		 $( ".dashboard, .myreport, .preference, .helpcenter, .compare" ).mouseleave(function() {
				$scope.settingFocus();	
				});
		 
		},0,false);
	
	
	

});
