'use strict';

var landingPageController = angular.module('landingPageController',[])


landingPageController.controller("landingPageCtrl", ['$http', '$scope', '$timeout', 'loadJsonService', '$mdDialog',
  function($http, $scope, $timeout, loadJsonService, $mdDialog) {
  $scope.user = {};
  $scope.userType = [];
  var sliderIndex = 0;
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
      $scope.userType = $scope.userTypes[sliderIndex];
  });

  $scope.slideLeft = function() {
    sliderIndex--;
    if (sliderIndex < 0) {
      sliderIndex = $scope.userTypes.length - 1;
    }
    $scope.userType = $scope.userTypes[sliderIndex];
  };
  $scope.slideRight = function() {
    sliderIndex++;
    if (sliderIndex >= $scope.userTypes.length) {
      sliderIndex = 0;
    }
    $scope.userType = $scope.userTypes[sliderIndex];
  };




  $scope.register = function() {
    console.log('in function');
    $http({
          method  : 'POST',
          url : '/rest/register',
          data    : $scope.user //forms user object
         })
    .success(function(data) {
      $scope.success = true;
    })
  };

  $scope.close = function() {
    $scope.success = false;
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



