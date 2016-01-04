'use strict'
var fjuApp = angular.module('landingpage',['ngMaterial', 'ngRoute', 'landingPageController', 'getToKnowFJUController', 'learningAtFJUController', 'fjuFilters', 'fjuServices', 'fjuDirectives', 'ngMessages']);

fjuApp.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{[{');
	$interpolateProvider.endSymbol('}]}');
});

fjuApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/landingpage/index.html',
        controller: 'landingPageCtrl'
      }).
      when('/gettoknowfju', {
        templateUrl: 'templates/get_to_know_fju/index.html',
        controller: 'getToKnowFJUCtrl'
      }).
      when('/learningatfju', {
        templateUrl: 'templates/learning_at_fju/index.html',
        controller: 'learningAtFJUCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
}]);

