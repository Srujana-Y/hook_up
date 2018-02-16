/**
 * 
 */

var app=angular.module('app',['ngRoute'])
app.config(function($routeProvider){
	$routeProvider
	.when('/register',{
		templateUrl:'views/registerform.html',
		controller:'UserController'
	})
	
	.otherwise({
		template:'views/home.html'
	})
})