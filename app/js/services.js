'use strict';

/* Services */

var fjuServices = angular.module('fjuServices',['ngResource']);

fjuServices.factory('landingPageService', ['$resource',
  function($resource){
    return $resource('content/landingpage.json', {}, {
      query: {method:'GET', isArray:false}
    });
  }]);