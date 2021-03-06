/**
 * @ngdoc overview
 * @name app
 * @description Glue to where all the greatness begins
 */

(function () {

  'use strict';

  angular.module('app', [
      'app.core',
      'app.common',
      /**
       * Application modules
       **/
      'app.channels',
      'app.login',
      'app.Signup',
      'app.AboutUs'
    ])
    .config(function ($ionicConfigProvider) {
      $ionicConfigProvider.views.transition('ios');
    });

}());






