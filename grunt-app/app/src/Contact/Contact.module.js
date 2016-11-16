/**
 * @ngdoc overview
 * @name app.Contact
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.Contact', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    $stateProvider
     .state('Contact', {
       url:'/contact-us',
       cache: false,
       templateUrl:'src/Contact/contact.html',
       controller: 'Contact as vm'
     }
    );
  }

}());
