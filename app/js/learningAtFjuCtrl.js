'use strict';

var learningAtFJUController = angular.module('learningAtFJUController', [])


learningAtFJUController.controller("learningAtFJUCtrl", ['$http', '$scope', '$timeout', 'loadJsonService', function($http, $scope, $timeout, loadJsonService) {
  $scope.user = {};
  loadJsonService.get({jsonName:'learningatfju'}, function(data) {
      $scope.title = data.heading;
      $scope.desc = data.description;
      $scope.list = data.list;
  });
}]);