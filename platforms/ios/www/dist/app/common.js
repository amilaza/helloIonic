angular.module('common', [
  // Declare here all AngularJS dependencies that are shared by all modules.
  'supersonic', 'ngCordova', 'underscore'
]);

var common = angular.module('common');


// common.service()



common.service('UserManager', (function() {

    /**
    *  @classdesc UserManager
    *  @constructor
    */
    function UserManager(supersonic, $cordovaFacebook, $http) {
        
        var Facebook = (function() {
            /**
            *  @classdesc for facebook account
            *  @construct
            */
            var Facebook = function() {};

            /**
            * function
            * @param {object} loginResponse
            */
            function getUserData(loginResponse) {
                $cordovaFacebook.api('/me', null).then(function(apiSuccess) {
                    if (apiSuccess.verified) {
                        // サーバーへの登録処理
                        connectServerRegist(loginResponse, apiSuccess);
                    } else {
                        // ログイン失敗（検証エラー）
                        supersonic.ui.dialog.alert('verified error');
                    }
                },
                function(apiFailur) {
                    // API取得失敗
                    supersonic.ui.dialog.alert('api error.');
                });
            }

            /**
            *  function
            *  @param {object} loginResponse
            *  @param {object} apiResponse
            */
            function connectServerRegist(loginResponse, apiResponse) {
                // var url = 'https://www.pictcake.jp/api/sp/mypage/facebook';
                // loginResponse = loginResponse.authResponse;
                // var body = {
                //     'email': apiResponse['email'],
                //     'lastName': apiResponse['last_name'],
                //     'firstName': apiResponse['first_name'],
                //     'access_token': loginResponse['accessToken'],
                //     'expirDate': loginResponse['expiresIn'] + ""
                // };

                // supersonic.ui.dialog.alert(JSON.stringify(body));

                // $http.get(url, body).success(function(data, status) {
                //     data = JSON.stringify(data).substring(100, 200);
                //     supersonic.ui.dialog.alert(status + '\n\n' + data);
                //     supersonic.ui.dialog.alert("AAAAAAAAAAA");
                //    supersonic.logger.info(data);
                //    supersonic.logger.info(status);
                // }).error(function(data, status) {
                //     data = JSON.stringify(data);
                //     supersonic.ui.dialog.alert(status + '\n\n' + data);
                //     supersonic.ui.dialog.alert("BBBBBBBBBBBBB");
                //     supersonic.logger.info(data);
                //    supersonic.logger.info(status);
                // });

                connect();
            }

            function connect() {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', 'http://localhost', true);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        supersonic.ui.dialog.alert('success');
                        supersonic.ui.dialog.alert(xhr.responseText);
                    }
                    else if (xhr.readyState === 4 && xhr.status !== 200) {
                        supersonic.ui.dialog.alert('error');
                        supersonic.ui.dialog.alert(xhr.responseText);
                    }
                };
                xhr.send(null);
            }

            /**
            *  function
            *  登録処理
            */
            Facebook.register = function() {
                $cordovaFacebook.getLoginStatus().then(function(statusSuccess) {
                    // ステータスが取得できた場合の処理。（つまり、statusがunknownの場合も含まれる）
                    if (statusSuccess.status === 'unknown') {
                        $cordovaFacebook.login(['public_profile', 'email']).then(function(loginSuccess) {
                            // ログイン成功
                            getUserData(loginSuccess);
                        },
                        function(loginFailur) {
                            // ログイン失敗
                            supersonic.ui.dialog.alert('login error.');
                        });
                    } else {
                        // すでに認証済み（トークンが生きている間）
                        statusSuccess = JSON.stringify(statusSuccess);
                        supersonic.logger.info("token alive\n\n " + statusSuccess);
                    }
                },
                function(statusFailur) {
                    // statusの取得失敗
                    supersonic.ui.dialog.alert("不明なエラー");
                });
            };

            /**
            *  function 
            *  login 処理
            */
            Facebook.login = function() {
                supersonic.ui.dialog.alert("todo");
            };

            return Facebook;
        })();


        function Normal() {

        }


        /**
        * method
        * すでに登録済みかどうか
        * TODO
        * （アプリの利用前に登録済みである可能性があるのでサーバーでAPIを使用して確認する。
        *　バージョンアップを考慮する必要がある。が、下位バージョンがクソな仕様だから気にしなくていい）
        *  毎回Facebookからemailを取得してサーバーへ登録・ログインを意識する必要なく実装すると楽だが、
        *  ユーザーのメアドが変更された場合に対処できない。
        */
        this.isRegistered = function() {
            
        };


        this.login = function(isFacebookString) {
            if (isFacebookString === "facebook") {
                Facebook.register();
            }
            else {
                supersonic.ui.dialog.alert("else");
            }
        };
    }


    return ['supersonic', '$cordovaFacebook', '$http', UserManager];

})());


// function getFacebookUserData() {
        //     var defered = $q.defer();
        //     $cordovaFacebook.api('/me', ['public_profile', 'email']).then(function(apiSuccess) {
        //         success = JSON.stringify(apiSuccess);
        //         supersonic.logger.info(apiSuccess);
        //         defered.resolve(apiSuccess);
        //     },
        //     function(apiFailur) {
        //         supersonic.logger.info("Logged in Error with Facebook API");
        //         defered.reject(apiFailur);
        //     });

        //     return defered.promise;
        // }

        // function loginWithFacebook() {
        //     var defered = $q.defer();
        //     $cordovaFacebook.login(['public_profile', 'email']).then(function(loginSuccess) {
        //         getFacebookUserData().then(function(apiSuccess) {
        //             defered.resolve(apiSuccess);
        //         },
        //         function(apiFailur) {
        //             defered.reject(apiFailur);
        //         });
        //     },
        //     function(loginFailur) {
        //         defered.reject(loginFailur);
        //     });

        //     return defered.promise;
        // }


        // this.login = function(isFirstLogin) {
        //     var defered = $q.defer();
        //     $cordovaFacebook.getLoginStatus().then(function(statusSuccess) {
        //         loginWithFacebook().then(function(loginSuccess) {
        //             defered.resolve(loginSuccess);
        //         },
        //         function(loginFailur) {
        //             defered.reject(loginFailur);
        //         });
        //     },
        //     function(statusFailur) {
        //         defered.reject(statusFailur);
        //     });

        //     return defered.promise;
        // };