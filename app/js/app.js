'use strict'
var fjuApp = angular.module('landingpage',['ngMaterial', 'ngRoute', 'landingPageController', 'fjuServices', 'fjuDirectives', 'ngMessages']);

fjuApp.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{[{');
	$interpolateProvider.endSymbol('}]}');
});

fjuApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/landingpage/index.html',
        controller: 'landingPageCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);

