/**
 * @ngdoc controller
 * @name app.NewEmployee.controller:NewEmployee
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.NewEmployee')
		.controller('NewEmployee', NewEmployee);

  /* @ngInject */
	function NewEmployee($ionicHistory, dataService){
		var vm = this;

    vm.employee = {

      firstname: "",
      lastname: "",
      email: "",
      bio: "",
      address: "",
      designation: "",
      salary: 0,
      department: ""

    };

		vm.goBack = goBack;
    vm.createEmployee = createEmployee;
    vm.showSelectValue = showSelectValue;
    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.NewEmployee.controller:NewEmployee
     * @description
     * My Description rules
     */
    function goBack(){
      $ionicHistory.goBack();
    }

    function createEmployee(employee) {
      console.log(employee);
      dataService.employee.createEmployee(employee).then(function(res){
      console.log(res.data);

          vm.employee = {

            firstname: "",
            lastname: "",
            email: "",
            bio: "",
            address: "",
            designation: "",
            salary: 0,
            department: ""

          };

          vm.goBack();
      },
      function(err){
      console.log(err);

      });
    }

    function showSelectValue(dpt) {
      console.log(dpt);
    }
	}

}());
