var contact = angular.module('contact');

contact.controller('IndexController', function($scope, supersonic) {
// Controller functionality here
    $scope.showMenu = function() {
        supersonic.ui.drawers.open('left').then(function() {

        });
    };
});
