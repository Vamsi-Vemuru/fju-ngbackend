'use strict';

var landingPageController = angular.module('landingPageController',[])


landingPageController.controller("landingPageCtrl", ['$http', '$scope', '$timeout', 'loadJsonService', '$mdDialog',
  function($http, $scope, $timeout, loadJsonService, $mdDialog) {
  $scope.user = {};

  $scope.showDialogue = function(ev, ind) {
    var templ = 'dialog'+ind+'.tmpl.html';
    $mdDialog.show({
      controller: DialogController,
      templateUrl: templ,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
    })
  };

  loadJsonService.get({jsonName:'landingpage'}, function(data) {
      $scope.degreeTitle = data.heading;
      $scope.degreeDesc = data.description;
      $scope.list = data.list;
      $scope.end = data.end
      $scope.courseReq = data.fieldsList[0];
      $scope.preReq= data.fieldsList[1];
      $scope.tution = data.fieldsList[2];
      $scope.userTypes = data.typeList;
      $scope.userType = $scope.userTypes[0];
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

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };

  $scope.cancel = function() {
    $mdDialog.cancel();
  };
}



