/**
 * @ngdoc controller
 * @name app.login.controller:Login
 * @description < description placeholder >
 */



(function () {

  'use strict';

  angular
    .module('app.login')
    .controller('Login', Login);

  /* @ngInject */
  function Login($ionicHistory, $state, dataService, Restangular, $localStorage, $rootScope, $openFB, $ionicPopup) {
    var vm = this;
    vm.user = {};
//    StatusBar.overlaysWebView(false);


    vm.goBack = goBack;
    vm.login = login;
    vm.Oauth = Oauth;
    vm.facebookLogin = facebookLogin;
    vm.showUnauthAlert = showUnauthAlert;
    // vm.showConfirm = showConfirm;


    var facebookToken = {};




    function showUnauthAlert() {
      var alertPopup = $ionicPopup.alert({
        title: 'Oops',
        template: '<h5>Sorry the username or passoword are invalid.</h5>'
      });
    }


    function login() {
      $rootScope.showLoader();

      dataService.user.login(vm.user).then(function (res) {
        $rootScope.hideLoader();
        console.log(res.data);
        $localStorage.token = res.data.token;
        Restangular.setDefaultHeaders({'x-access-token': res.data.token});
        $rootScope.user = res.data.user;
        console.log($rootScope.user);
        $state.go('Channel')
      }, function (err) {
        var errName = err.data.err.name;
        console.log(errName);
        if(errName === 'IncorrectPasswordError'){
          vm.showUnauthAlert();
        }
        else if(errName === 'IncorrectUsernameError'){
          vm.showUnauthAlert();
        }
        $rootScope.hideLoader();
      })
    }

    function goBack() {
      $ionicHistory.goBack();
    }

    function Oauth(provider) {
      $rootScope.showLoader();

      $openFB.login({scope: 'email,user_friends'})
        .then(function (token) {
          $rootScope.hideLoader();
          console.log(token);

          facebookToken = {
            token: token.authResponse.token
          };
          $rootScope.showLoader();

          dataService.user.facebookLogin(facebookToken).then(function (res) {
              $rootScope.hideLoader();
              console.log(res.data);
              $localStorage.token = res.data.token;
              Restangular.setDefaultHeaders({'x-access-token': res.data.token});
              $rootScope.user = res.data.user;

              $state.go('Channel');
              console.log($rootScope.user);
            },
            function (err) {
              $rootScope.hideLoader();
              console.log(err);

            });

        }, function (err) {
          $rootScope.hideLoader();
          console.log(err);
        });
    }


    function facebookLogin() {

    }

  }

}());
