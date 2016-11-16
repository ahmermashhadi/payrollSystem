/**
 * @ngdoc overview
 * @name app.Employee
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.Employee', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    $stateProvider
     .state('Employee', {
       url:'/employee/:dname',
       cache: false,
       templateUrl:'src/Employee/employee.html',
       controller: 'Employee as vm',
       resolve : {
         r_getdptEmployees : function (dataService, $stateParams) {
           return dataService.employee.getEmployeeByDepartment($stateParams.dname);
         }
       }
     }
    );
  }

}());
