'use strict';



var fujiApp = angular.module('fujiApp', [ 'ngRoute' ]);

// configure our routes
fujiApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'mydashboard',
		controller : 'DashboardController'
	})
	$routeProvider.when('/mydashboard', {
		templateUrl : 'mydashboard',
		controller : 'DashboardController'
	})
	
	$routeProvider.when('header', {
		templateUrl : 'header'//,
		//controller : 'headerController'
	})
	
	$routeProvider.when('mainfooter', {
		templateUrl : 'footer'
	})

	// route for the home page
	.when('/reports/:reportId', {
		templateUrl : 'myreports',
		controller : 'ReportController'
	})
	
	
	.when('/customreports/:reportId', {
		templateUrl : 'customreports',
		controller : 'CompareController'
	})
	
	.when('/compare', {
		templateUrl : 'compare',
		controller : 'CompareController'
	})

	// route for the about page
	.when('/preferences', {
		templateUrl : 'preferences',
		controller : 'PreferenceController'
	})

	// route for the contact page
	.when('/helpcenter', {
		templateUrl : 'helpcenter',
		controller : 'HelpCenterController'
	});
	
	
});

