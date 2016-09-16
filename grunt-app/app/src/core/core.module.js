/**
 * @ngdoc overview
 * @name app.core
 * @description Core is where the Magma is
 */

(function(){

  'use strict';

  angular.module('app.core', [
    'ui.router',
    'ngStorage',
    'angular-jwt',
    'restangular',
    'ngCordova',
    'ionic',
    'ng-mfb',
    'yaru22.angular-timeago',
    'satellizer',
    'ngOpenFB'
  ])
    //.constant('API_URL','http://192.168.10.9:3000/');
    // .constant('API_URL','http://altcityapi-v1.ap-southeast-1.elasticbeanstalk.com/');

}());
