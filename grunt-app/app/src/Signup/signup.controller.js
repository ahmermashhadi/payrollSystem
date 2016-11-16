/**
 * @ngdoc controller
 * @name app.Signup.controller:Signup
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.Signup')
    .controller('Signup', Signup);

  /* @ngInject */
  function Signup($ionicHistory, $auth,dataService, $localStorage,Restangular,jwtHelper, $rootScope, $state, $openFB, $ionicPopup, $ionicLoading){
    var vm = this;

    vm.user = {};
    vm.goBack = goBack;
    vm.Oauth = Oauth;
    vm.register = register;



    function goBack(){
      $ionicHistory.goBack();
    }


    function register() {
      $rootScope.showLoader();

      console.log(vm.user);
      dataService.user.register(vm.user).then(function (res) {
        console.log(res.data);
        if(res.success){
          $rootScope.hideLoader();
          $rootScope.showLoader();

          dataService.user.login(vm.user).then(function (res) {
            $rootScope.hideLoader();
            console.log(res.data);
            $localStorage.token = res.data.token;
            Restangular.setDefaultHeaders({'x-access-token': res.data.token});
            $rootScope.user = res.data.user;
            $state.go('Channel')
          }, function (err) {
            $rootScope.hideLoader();
            console.log(err);
          })
        }
      }, function (err) {
        $rootScope.hideLoader();
        console.log(err);
      })
    }


    function Oauth(provider) {
      $openFB.login({scope: 'email,user_friends'})
        .then(function (token) {
          console.log(token);

          var facebookToken = {
            token: token.authResponse.token
          };
          dataService.user.facebookLogin(facebookToken).then(function (res) {
              console.log(res.data);
              $localStorage.token = res.data.token;
              Restangular.setDefaultHeaders({'x-access-token': res.data.token});
              $rootScope.user = res.data.user;
              $state.go('Channel');
              console.log($rootScope.user);
            },
            function (err) {
              console.log(err);
            });
        }, function (err) {
          console.log(err);
        });
      // $auth.authenticate(provider).then(function(res){
      //     console.log(res);
      //
      //   },
      //   function(err){
      //     console.log(err);
      //
      //   });
      console.log('Logging In To Facebook');
    }
  }

}());
