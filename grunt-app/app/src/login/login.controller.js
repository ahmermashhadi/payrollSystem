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
  function Login($ionicHistory) {
    var vm = this;
    vm.user = {};
//    StatusBar.overlaysWebView(false);
vm.goBack = goBack;


    var facebookToken = {};

    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.login.controller:Login
     * @description
     * My Description rules
     */


    function goBack() {
      $ionicHistory.goBack();
    }

  }

}());
