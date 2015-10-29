angular.module('howtouse', [
  // Declare any module-specific AngularJS dependencies here
  'common', 'ngTouch', 'underscore'
]);

var howtouse = angular.module('howtouse');
howtouse.controller('IndexController', function($scope, supersonic) {
    $scope.showMenu = function() {
        supersonic.ui.drawers.open('left').then(function() {

        });
    };
});
