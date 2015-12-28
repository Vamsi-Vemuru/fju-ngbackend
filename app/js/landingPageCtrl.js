'use strict';

var landingPageController = angular.module('landingPageController',[])


landingPageController.controller("landingPageCtrl", ['$http', '$scope', '$timeout', 'landingPageService', function($http, $scope, $timeout, landingPageService) {
  $scope.user = {};
  landingPageService.query(function(data) {
      $scope.degreeTitle = data.heading;
      $scope.degreeDesc = data.description;
      $scope.courseReq = data.fieldsList[0];
      $scope.preReq= data.fieldsList[1];
      $scope.tution = data.fieldsList[2];
  });


  $scope.register = function() {
    console.log('in function');
    $http({
          method  : 'POST',
          url : '/rest/register',
          data    : $scope.user //forms user object
         })
    .success(function(data) {
      $scope.user = {};
      $scope.userForm.$setPristine();
      $scope.userForm.$setUntouched();
      $scope.success = true;
      $timeout(function () {
          $scope.success = false;
      }, 3000);
    })
  };
  
}]);


