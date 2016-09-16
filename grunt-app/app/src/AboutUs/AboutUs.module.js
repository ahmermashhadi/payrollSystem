/**
 * @ngdoc overview
 * @name app.AboutUs
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.AboutUs', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    $stateProvider
     .state('AboutUs', {
       url:'/about-us',
       title: 'About Entaj',
       templateUrl:'src/AboutUs/aboutUs.html',
       controller: 'AboutUs as vm'
     }
    );
  }

}());
