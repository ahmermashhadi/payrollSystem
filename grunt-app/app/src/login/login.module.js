/**
 * @ngdoc overview
 * @name app.login
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.login', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    $stateProvider
     .state('Login', {
       cache: true,
       url:'/login',
       templateUrl:'src/login/login.html',
       controller: 'Login as vm'
     }
    );
  }

}());
