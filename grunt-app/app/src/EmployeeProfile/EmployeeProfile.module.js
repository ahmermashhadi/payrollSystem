/**
 * @ngdoc overview
 * @name app.EmployeeProfile
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.EmployeeProfile', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    $stateProvider
     .state('EmployeeProfile', {
       url:'/employee-profile/:eid',
       templateUrl:'src/EmployeeProfile/employeeProfile.html',
       controller: 'EmployeeProfile as vm',
       cache: false,
       resolve : {
         r_employeeData : function (dataService, $stateParams) {
           return dataService.employee.getEmployee($stateParams.eid);
         }
       }
     }
    );
  }

}());
