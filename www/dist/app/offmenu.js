angular.module('offmenu', [
  // Declare any module-specific AngularJS dependencies here
  'common', 'ngTouch', 'underscore'
]);

var offmenu = angular.module('offmenu');

offmenu.value('viewIdentify', {
    'news': {
        location: 'news#index',
        id: 'news-index'
    },
    'home': {
        location: 'home#index',
        id: 'home-index'
    },
    'cart': {
        location: 'cart#index',
        id: 'cart-index'
    },
    'mypage': {
        location: 'mypage#index',
        id: 'mypage-index'
    },
    'contact': {
        location: 'contact#index',
        id: 'contact-index'
    },
    'howtouse': {
        location: 'howtouse#index',
        id: 'howtouse-index'
    },
    'testView': {
      location: 'testView#index',
      id: 'testView-index'
    }
});


offmenu.service('ViewManage', (function() {
    /**
    * @classdesc This is ViewManage class
    * @constructor
    * @param viewIdentify {object}
    */
    function ViewManage(viewIdentify, _) {
        var self = this;
        /**
        * loaded view
        */
        this.loadedViews = [];

         /**
        * function
        * 指定したView(id)が追加済みか判定する
        */
        function isAddedView(viewId) {
            var result = _.find(self.loadedViews, function(v) {
                return (v.getId() === viewId);
            });
            return (result !== undefined);
        };

        /**
        * function
        * @return {undefined | View}
        */
        function getView(id) {
            return _.find(self.loadedViews, function(v) {
                return (v.getId() === id);
            });
        };

        function setLoadedView(view) {
            if (!isAddedView(view.getId())) {
                self.loadedViews.push(view);
            }
        };

        function moveView(view) {
            supersonic.ui.layers.replace(view);
            supersonic.ui.drawers.close();
        }

        /**
        * function
        * view change
        */
        this.changeView = function(viewInfo) {
            var view = null;
            if (!isAddedView(viewInfo.id)) {
                view = new supersonic.ui.View(viewInfo);
                setLoadedView(view);
                supersonic.ui.views.start(view).then(moveView);
            } else {
                view = getView(viewInfo.id);
                moveView( view );
            }
        };
    };

    return ['viewIdentify', '_', ViewManage];
})());



offmenu.controller('IndexController', ['$scope', 'supersonic', 'viewIdentify', 'ViewManage',
function($scope, supersonic, viewIdentify, ViewManage) {

    $scope.moveTutorial = function() {
        supersonic.ui.dialog.alert('チュートリアル');
    };

    $scope.moveNews = function() {
        ViewManage.changeView(viewIdentify.news);
    };

    $scope.moveHome = function() {
        ViewManage.changeView(viewIdentify.home);
    };

    $scope.moveCart = function() {
        ViewManage.changeView(viewIdentify.cart);
    };

    $scope.moveMyPage = function() {
        ViewManage.changeView(viewIdentify.mypage);
    };

    $scope.moveContact = function() {
        ViewManage.changeView(viewIdentify.contact);
    };

    $scope.moveHowToUse = function() {
        ViewManage.changeView(viewIdentify.howtouse);
    };
    $scope.moveTestView = function() {
        ViewManage.changeView(viewIdentify.testView);
    };
}]);
