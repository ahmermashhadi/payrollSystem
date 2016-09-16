/**
 * @ngdoc overview
 * @name app.Signup
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.Signup', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    $stateProvider
     .state('Signup', {
       url:'/signup',
       templateUrl:'src/Signup/signup.html',
       controller: 'Signup as vm'
     }
    );
  }

}());
