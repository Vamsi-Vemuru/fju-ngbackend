'use strict';

var getToKnowFJUController = angular.module('getToKnowFJUController',[])


getToKnowFJUController.controller("getToKnowFJUCtrl", ['$http', '$scope', '$timeout', 'loadJsonService', function($http, $scope, $timeout, loadJsonService) {
  $scope.user = {};
  loadJsonService.get({jsonName:'gettoknow'}, function(data) {
      $scope.aboutTitle = data.heading;
      $scope.aboutDesc = data.description;
  });
}]);