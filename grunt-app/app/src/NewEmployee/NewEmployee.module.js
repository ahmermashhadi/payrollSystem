/**
 * @ngdoc overview
 * @name app.NewEmployee
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.NewEmployee', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    $stateProvider
     .state('NewEmployee', {
       cache: false,
       url:'/new-employee',
       templateUrl:'src/NewEmployee/newEmployee.html',
       controller: 'NewEmployee as vm'
     }
    );
  }

}());
