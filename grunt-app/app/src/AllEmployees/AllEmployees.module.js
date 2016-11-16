/**
 * @ngdoc overview
 * @name app.AllEmployees
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.AllEmployees', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    $stateProvider
     .state('AllEmployees', {
       url:'/all-employee',
       templateUrl:'src/AllEmployees/allEmployees.html',
       controller: 'AllEmployees as vm',
       cache: false,
       resolve : {
         r_getAllEmployees:  function (dataService) {
             return dataService.employee.getAllEmployee();
         }
       }
     }
    );
  }

}());
