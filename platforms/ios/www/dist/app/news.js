angular.module('news', [
  // Declare any module-specific AngularJS dependencies here
  'common', 'ngTouch', 'underscore'
]);

var news = angular.module('news')
news.controller('IndexController', function($scope, supersonic) {
    $scope.showMenu = function() {
        supersonic.ui.drawers.open('left').then(function() {

        });
    };
});
