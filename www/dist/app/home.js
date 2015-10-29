angular.module('home', [
  // Declare any module-specific AngularJS dependencies here
  'common', 'ngTouch', 'underscore'
]);

var home = angular.module('home')

home.controller('IndexController', ['$scope', 'supersonic', 
function($scope, supersonic) {

    $scope.showMenu = function() {
        supersonic.ui.drawers.open('left').then(function() {

        });
    };

    $scope.test = function() {
        supersonic.logger.info("facebookConnectPlugin" in window);
    };

}]);