fujiApp.controller('PreferenceController', function($scope, $http) {
	// create a message to display in our view
	$scope.message = 'Preference.';
	$scope.pref={};
	
	$scope.postData = function(url, postData) {
			
		 $http({
			    method : "POST",
			    url: url,
			    data:postData,
		        dataType:'application/json',
		        headers: { 'Content-Type': 'application/json' }
			  }).then(function mySuccess(response) {
			      $scope.data = response.data;
			      document.getElementById("alertId").style.display = "inline-block";
			    }, function myError(response) {
			      $scope.error = response.statusText;
			      console.log('Error-------- ' +  $scope.error);
			  });
	};
	
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
	
	$scope.applyWidgets = function() {
		
		
	 var pref;
   	 
   	 $http({
   		    method : "GET",
   		    url: 'dashboard_config/all_widgets',
   		    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
   		  }).then(function mySuccess(response) {
   		      pref = response.data;
   		      $scope.postWidgets(pref);
   		    }, function myError(response) {
   		      $scope.error = response.statusText;
   		      console.log('Error-------- ' +  $scope.error);
   		  });
   	 
   	
		
	};
	
	$scope.postWidgets = function(pref) {
		var url="dashboard_config/update_widget_config";


		pref.forEach(function(item){
		    	    console.log(item.title + ' ' + item.selected);
		    	    if(item.title=="Studies Performed" && $scope.pref.STUDIES_PERFORMED == true)
			    	{
		    	    	item.selected=true;
		    	    	
			    	}
		    	    if(item.title=="Studies Pending" && $scope.pref.STUDIES_PENDING==true)
			    	{
		    	    	item.selected=true;
			    	}
		    	    if(item.title=="Reports" && $scope.pref.REPORTS==true)
			    	{
		    	    	item.selected=true;
			    	}
		    	    if(item.title=="X-Ray Studies" && $scope.pref.X_RAY_STUDIES==true)
			    	{
		    	    	item.selected=true;
			    	}
		    	    if(item.title=="US Studies" && $scope.pref.US_STUDIES==true)
			    	{
		    	    	item.selected=true;
			    	}
		    	    if(item.title=="CT Studies" && $scope.pref.CT_STUDIES==true)
			    	{
		    	    	item.selected=true;
			    	}
		    	    if(item.title=="MR Studies" && $scope.pref.MR_STUDIES==true)
			    	{
		    	    	item.selected=true;
			    	}
		    	    if(item.title=="RF/NM/ETC Studies" && $scope.pref.ETC_STUDIES==true)
			    	{
		    	    	item.selected=true;
			    	}
		    	    if(item.title=="Emergency Cases" && $scope.pref.EMERGENCY_CASES==true)
			    	{
		    	    	item.selected=true;
			    	}
		    	    if(item.title=="Equipment Changed Numbers" && $scope.pref.EQUIPMENT_CHANGED_NUMBERS==true)
			    	{
		    	    	item.selected=true;
			    	}
		    	    if(item.title=="Studies Performed" && $scope.pref.STUDIES_PERFORMED == false)
			    	{
		    	    	item.selected=false;
		    	    	
			    	}
		    	    if(item.title=="Studies Pending" && $scope.pref.STUDIES_PENDING==false)
			    	{
		    	    	item.selected=false;
			    	}
		    	    if(item.title=="Reports" && $scope.pref.REPORTS==false)
			    	{
		    	    	item.selected=false;
			    	}
		    	    if(item.title=="X-Ray Studies" && $scope.pref.X_RAY_STUDIES==false)
			    	{
		    	    	item.selected=false;
			    	}
		    	    if(item.title=="US Studies" && $scope.pref.US_STUDIES==false)
			    	{
		    	    	item.selected=false;
			    	}
		    	    if(item.title=="CT Studies" && $scope.pref.CT_STUDIES==false)
			    	{
		    	    	item.selected=false;
			    	}
		    	    if(item.title=="MR Studies" && $scope.pref.MR_STUDIES==false)
			    	{
		    	    	item.selected=false;
			    	}
		    	    if(item.title=="RF/NM/ETC Studies" && $scope.pref.ETC_STUDIES==false)
			    	{
		    	    	item.selected=false;
			    	}
		    	    if(item.title=="Emergency Cases" && $scope.pref.EMERGENCY_CASES==false)
			    	{
		    	    	item.selected=false;
			    	}
		    	    if(item.title=="Equipment Changed Numbers" && $scope.pref.EQUIPMENT_CHANGED_NUMBERS==false)
			    	{
		    	    	item.selected=false;
			    	}
		    	});
				$scope.postData(url, pref);
				
				
	};
	
	$scope.checkCount = function(e) {
		var count=0;
		
    	    if($scope.pref.STUDIES_PERFORMED == true)
	    	{
    	    	count++;
    	    	
	    	}
    	    if($scope.pref.STUDIES_PENDING==true)
	    	{
    	    	count++;
	    	}
    	    if($scope.pref.REPORTS==true)
	    	{
    	    	count++;
	    	}
    	    if($scope.pref.X_RAY_STUDIES==true)
	    	{
    	    	count++;
	    	}
    	    if($scope.pref.US_STUDIES==true)
	    	{
    	    	count++;
	    	}
    	    if($scope.pref.CT_STUDIES==true)
	    	{
    	    	count++;
	    	}
    	    if($scope.pref.MR_STUDIES==true)
	    	{
    	    	count++;
	    	}
    	    if($scope.pref.ETC_STUDIES==true)
	    	{
    	    	count++;
    	    	
    	    	
	    	}
    	    if($scope.pref.EMERGENCY_CASES==true)
	    	{
    	    	count++;
    	    	
	    	}
    	    if($scope.pref.EQUIPMENT_CHANGED_NUMBERS==true)
	    	{
    	    	count++;
	    	}
    	    if(count>8)
	    	{
	    	  e.currentTarget.checked=false;
	    	  e.currentTarget.value=false;
	    	  if(e.currentTarget.name=="STUDIES_PERFORMED")
		    	{
	    	    	$scope.pref.STUDIES_PERFORMED=false;
	    	    	
		    	}
				if(e.currentTarget.name=="STUDIES_PENDING")
		    	{
	    	    	$scope.pref.STUDIES_PENDING=false;
	    	    	
		    	}
				if(e.currentTarget.name=="REPORTS")
		    	{
	    	    	$scope.pref.REPORTS=false;
	    	    	
		    	}
				if(e.currentTarget.name=="X_RAY_STUDIES")
		    	{
	    	    	$scope.pref.X_RAY_STUDIES=false;
	    	    	
		    	}
				if(e.currentTarget.name=="US_STUDIES")
		    	{
	    	    	$scope.pref.US_STUDIES=false;
	    	    	
		    	}
	    	    if(e.currentTarget.name=="CT_STUDIES")
		    	{
	    	    	$scope.pref.CT_STUDIES=false;
	    	    	
		    	}
	    	    if(e.currentTarget.name=="MR_STUDIES")
		    	{
	    	    	$scope.pref.MR_STUDIES=false;
	    	    	
		    	}
	    	    if(e.currentTarget.name=="ETC_STUDIES")
		    	{
	    	    	$scope.pref.ETC_STUDIES=false;
	    	    	
		    	}
				 if(e.currentTarget.name=="EMERGENCY_CASES")
		    	{
	    	    	$scope.pref.EMERGENCY_CASES=false;
	    	    	
		    	}
				 if(e.currentTarget.name=="EQUIPMENT_CHANGED_NUMBERS")
		    	{
	    	    	$scope.pref.EQUIPMENT_CHANGED_NUMBERS=false;
	    	    	
		    	}
	    	   
	    	 
	    	}
    	   
    
		
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
	
  
	
	  
       
       
       $scope.showWidgets = function(pref) {
   		
    	   pref.forEach(function(item){
       	    console.log(item.title + ' ' + item.selected);
       	    if(item.title=="Studies Performed" && item.selected==true)
   	    	{
       	    	$scope.pref.STUDIES_PERFORMED = true;
   	    	}
       	    if(item.title=="Studies Pending" && item.selected==true)
   	    	{
       	    	$scope.pref.STUDIES_PENDING = true;
   	    	}
       	    if(item.title=="Reports" && item.selected==true)
   	    	{
       	    	$scope.pref.REPORTS = true;
   	    	}
       	    if(item.title=="X-Ray Studies" && item.selected==true)
   	    	{
       	    	$scope.pref.X_RAY_STUDIES = true;
   	    	}
       	    if(item.title=="US Studies" && item.selected==true)
   	    	{
       	    	$scope.pref.US_STUDIES = true;
   	    	}
       	    if(item.title=="CT Studies" && item.selected==true)
   	    	{
       	    	$scope.pref.CT_STUDIES = true;
   	    	}
       	    if(item.title=="MR Studies" && item.selected==true)
   	    	{
       	    	$scope.pref.MR_STUDIES = true;
   	    	}
       	    if(item.title=="RF/NM/ETC Studies" && item.selected==true)
   	    	{
       	    	$scope.pref.ETC_STUDIES = true;
   	    	}
       	    if(item.title=="Emergency Cases" && item.selected==true)
   	    	{
       	    	$scope.pref.EMERGENCY_CASES = true;
   	    	}
       	    if(item.title=="Equipment Changed Numbers" && item.selected==true)
   	    	{
       	    	$scope.pref.EQUIPMENT_CHANGED_NUMBERS = true;
   	    	}
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
	
	
		
	
	
	$scope.applyReports = function() {
		
		
		 var pref;
	   	 
	   	 $http({
	   		    method : "GET",
	   		    url: 'dashboard_config/all_reports',
	   		    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	   		  }).then(function mySuccess(response) {
	   		      pref = response.data;
	   		      $scope.postReports(pref);
	   		    }, function myError(response) {
	   		      $scope.error = response.statusText;
	   		      console.log('Error-------- ' +  $scope.error);
	   		  });
	   	 
	   	
			
		};
		
		
		$scope.postReports = function(pref) {
			var url="dashboard_config/update_report_config";


			pref.forEach(function(item){
			    	    console.log(item.name + ' ' + item.selected);
			    	    if(item.name=="Center wise Total Patient" && $scope.pref.report1 == true)
				    	{
			    	    	item.selected=true;
			    	    	
				    	}
			    	    if(item.name=="Department wise Patient" && $scope.pref.report2==true)
				    	{
			    	    	item.selected=true;
				    	}
			    	    if(item.name=="Modality Wise Studies Performed" && $scope.pref.report3==true)
				    	{
			    	    	item.selected=true;
				    	}
			    	    if(item.name=="Equipment Studies" && $scope.pref.report4==true)
				    	{
			    	    	item.selected=true;
				    	}
			    	    if(item.name=="Modality Wise Studies Pending" && $scope.pref.report5==true)
				    	{
			    	    	item.selected=true;
				    	}
			    	    if(item.name=="Studies Report with Pending Modality" && $scope.pref.report6==true)
				    	{
			    	    	item.selected=true;
				    	}
			    	    if(item.name=="Modality Wise Studies Completed Today" && $scope.pref.report7==true)
				    	{
			    	    	item.selected=true;
				    	}
			    	    if(item.name=="Modality Wise Studies Completed Yesterday" && $scope.pref.report8==true)
				    	{
			    	    	item.selected=true;
				    	}
			    	    if(item.name=="Modality Wise Studies Completed Finalized Today" && $scope.pref.report9==true)
				    	{
			    	    	item.selected=true;
				    	}
			    	    if(item.name=="Modality Wise Studies Completed Finalized Yesterday" && $scope.pref.report10==true)
				    	{
			    	    	item.selected=true;
				    	}
			    	    
			    	    
			    	    if(item.name=="Center wise Total Patient" && $scope.pref.report1 == false)
				    	{
			    	    	item.selected=false;
			    	    	
				    	}
			    	    if(item.name=="Department wise Patient" && $scope.pref.report2==false)
				    	{
			    	    	item.selected=false;
				    	}
			    	    if(item.name=="Modality Wise Studies Performed" && $scope.pref.report3==false)
				    	{
			    	    	item.selected=false;
				    	}
			    	    if(item.name=="Equipment Studies" && $scope.pref.report4==false)
				    	{
			    	    	item.selected=false;
				    	}
			    	    if(item.name=="Modality Wise Studies Pending" && $scope.pref.report5==false)
				    	{
			    	    	item.selected=false;
				    	}
			    	    if(item.name=="Studies Report with Pending Modality" && $scope.pref.report6==false)
				    	{
			    	    	item.selected=false;
				    	}
			    	    if(item.name=="Modality Wise Studies Completed Today" && $scope.pref.report7==false)
				    	{
			    	    	item.selected=false;
				    	}
			    	    if(item.name=="Modality Wise Studies Completed Yesterday" && $scope.pref.report8==false)
				    	{
			    	    	item.selected=false;
				    	}
			    	    if(item.name=="Modality Wise Studies Completed Finalized Today" && $scope.pref.report9==false)
				    	{
			    	    	item.selected=false;
				    	}
			    	    if(item.name=="Modality Wise Studies Completed Finalized Yesterday" && $scope.pref.report10==false)
				    	{
			    	    	item.selected=false;
				    	}
			    	    
			    	    
			    	});
					$scope.postData(url, pref);
					
					
		};
		
		$scope.checkReportCount = function(e) {
			var count=0;
			
	    	    if($scope.pref.report1 == true)
		    	{
	    	    	count++;
	    	    	
		    	}
	    	    if($scope.pref.report2==true)
		    	{
	    	    	count++;
		    	}
	    	    if($scope.pref.report3==true)
		    	{
	    	    	count++;
		    	}
	    	    if($scope.pref.report4==true)
		    	{
	    	    	count++;
		    	}
	    	    if($scope.pref.report5==true)
		    	{
	    	    	count++;
		    	}
	    	    if($scope.pref.report6==true)
		    	{
	    	    	count++;
		    	}
	    	    if($scope.pref.report7==true)
		    	{
	    	    	count++;
		    	}
	    	    if($scope.pref.report8==true)
		    	{
	    	    	count++;
	    	    	
	    	    	
		    	}
	    	    if($scope.pref.report9==true)
		    	{
	    	    	count++;
	    	    	
		    	}
	    	    if($scope.pref.report10==true)
		    	{
	    	    	count++;
		    	}
	    	    if(count>8)
		    	{
		    	  e.currentTarget.checked=false;
		    	  e.currentTarget.value=false;
		    	  if(e.currentTarget.name=="report1")
			    	{
		    	    	$scope.pref.report1=false;
		    	    	
			    	}
					if(e.currentTarget.name=="report2")
			    	{
		    	    	$scope.pref.report2=false;
		    	    	
			    	}
					if(e.currentTarget.name=="report3")
			    	{
		    	    	$scope.pref.report3=false;
		    	    	
			    	}
					if(e.currentTarget.name=="report4")
			    	{
		    	    	$scope.pref.report4=false;
		    	    	
			    	}
					if(e.currentTarget.name=="report5")
			    	{
		    	    	$scope.pref.report5=false;
		    	    	
			    	}
		    	    if(e.currentTarget.name=="report6")
			    	{
		    	    	$scope.pref.report6=false;
		    	    	
			    	}
		    	    if(e.currentTarget.name=="report7")
			    	{
		    	    	$scope.pref.report7=false;
		    	    	
			    	}
		    	    if(e.currentTarget.name=="report8")
			    	{
		    	    	$scope.pref.report8=false;
		    	    	
			    	}
					 if(e.currentTarget.name=="report9")
			    	{
		    	    	$scope.pref.report9=false;
		    	    	
			    	}
					 if(e.currentTarget.name=="report10")
			    	{
		    	    	$scope.pref.report10=false;
		    	    	
			    	}
		    	   
		    	 
		    	}
	    	   
	    
			
		};
	
		

	       
	       $scope.showReports = function(pref) {
	   		
	    	   pref.forEach(function(item){
	       	    console.log(item.name + ' ' + item.selected);
	       	    if(item.name=="Center wise Total Patient" && item.selected==true)
	   	    	{
	       	    	$scope.pref.report1 = true;
	   	    	}
	       	    if(item.name=="Department wise Patient" && item.selected==true)
	   	    	{
	       	    	$scope.pref.report2 = true;
	   	    	}
	       	    if(item.name=="Modality Wise Studies Performed" && item.selected==true)
	   	    	{
	       	    	$scope.pref.report3 = true;
	   	    	}
	       	    if(item.name=="Equipment Studies" && item.selected==true)
	   	    	{
	       	    	$scope.pref.report4 = true;
	   	    	}
	       	    if(item.name=="Modality Wise Studies Pending" && item.selected==true)
	   	    	{
	       	    	$scope.pref.report5 = true;
	   	    	}
	       	    if(item.name=="Studies Report with Pending Modality" && item.selected==true)
	   	    	{
	       	    	$scope.pref.report6 = true;
	   	    	}
	       	    if(item.name=="Modality Wise Studies Completed Today" && item.selected==true)
	   	    	{
	       	    	$scope.pref.report7 = true;
	   	    	}
	       	    if(item.name=="Modality Wise Studies Completed Yesterday" && item.selected==true)
	   	    	{
	       	    	$scope.pref.report8 = true;
	   	    	}
	       	    if(item.name=="Modality Wise Studies Completed Finalized Today" && item.selected==true)
	   	    	{
	       	    	$scope.pref.report9 = true;
	   	    	}
	       	    if(item.name=="Modality Wise Studies Completed Finalized Yesterday" && item.selected==true)
	   	    	{
	       	    	$scope.pref.report10 = true;
	   	    	}
	       	});
	   		
	   	};
	   	
	   	
	
	
	 $scope.resetReports();
     $scope.resetWidgets();
	 
	
});


