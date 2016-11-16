/**
 * @ngdoc overview
 * @name app.editEmployee
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.editEmployee', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    $stateProvider
     .state('EditProfile', {
       url:'/edit-profile/:eid',
       templateUrl:'src/editEmployee/editEmployee.html',
       controller: 'EditEmployee as vm',
       resolve: {
         r_employeeData : function (dataService, $stateParams) {
           return dataService.employee.getEmployee($stateParams.eid);
         }
       }
     }
    );
  }

}());
