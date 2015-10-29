var testView = angular.module('testView')

home.controller('IndexController', ['$scope','supersonic',
  function($scope, supersonic){
    $scope.showMenu = function() {
      supersonic.ui.drawers.open('left').then(function() {

      });
    };

    scope.pushToView = function() {
      
    }
  };
]);
