var news = angular.module('news')
news.controller('IndexController', function($scope, supersonic) {
    $scope.showMenu = function() {
        supersonic.ui.drawers.open('left').then(function() {

        });
    };
});
