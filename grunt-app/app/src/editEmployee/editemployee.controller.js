/**
 * @ngdoc controller
 * @name app.editEmployee.controller:EditEmployee
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.editEmployee')
		.controller('EditEmployee', EditEmployee);

  /* @ngInject */
	function EditEmployee(r_employeeData, dataService, $state){
		var vm = this;

    vm.employee = r_employeeData.data;


    vm.updateEmployee = updateEmployee;
    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.editEmployee.controller:EditEmployee
     * @description
     * My Description rules
     */
    function updateEmployee(employee){
			dataService.employee.updateEmployee(employee).then(function(res){
			console.log(res);
          $state.go('EmployeeProfile', { eid: employee._id });
        },
			function(err){
			console.log(err);
			});

		}
	}

}());
