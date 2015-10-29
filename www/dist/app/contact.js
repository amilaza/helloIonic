angular.module('contact', [
  // Declare any module-specific AngularJS dependencies here
  'common', 'underscore'
]);

var contact = angular.module('contact');

contact.controller('IndexController', function($scope, supersonic) {
// Controller functionality here
    $scope.showMenu = function() {
        supersonic.ui.drawers.open('left').then(function() {

        });
    };
});
