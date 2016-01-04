'use strict';

/* Services */

var fjuServices = angular.module('fjuServices',['ngResource']);

fjuServices.factory('loadJsonService', ['$resource',
  function($resource) {
    return $resource('content/:jsonName.json', {});
}]);