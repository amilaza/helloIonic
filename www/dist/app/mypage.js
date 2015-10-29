angular.module('mypage', [
  // Declare any module-specific AngularJS dependencies here
  'common', 'ngCordova', 'ngTouch', 'underscore'
]);

var mypage = angular.module('mypage');


mypage.controller('IndexController', ['$scope', 'supersonic', '$cordovaFacebook', 'UserManager', 
function($scope, supersonic, $cordovaFacebook, UserManager) {

    $scope.init = function() {
        // alert('initial code00')
    };

    $scope.login = function(isFacebookString) {
        UserManager.login(isFacebookString);
    };

    $scope.signin= function() {
        supersonic.ui.dialog.alert('normal login todo');
    };

    $scope.showMenu = function() {
        supersonic.ui.drawers.open('left').then(function() {

        });
    };

}]);

/*
angular.element(document).ready(function() {
    alert('initial code');
});
*/