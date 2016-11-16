/**
 * @ngdoc controller
 * @name app.EmployeeProfile.controller:EmployeeProfile
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.EmployeeProfile')
		.controller('EmployeeProfile', EmployeeProfile);

  /* @ngInject */
	function EmployeeProfile($stateParams, r_employeeData, dataService, $scope, $rootScope){
		var vm = this;

    vm.totalSalary = 0;
		vm.refreshEmployeeProfile = refreshEmployeeProfile;


    /////////////////////

    vm.userData = r_employeeData.data;

    vm.totalSalary = $rootScope.msToTime(vm.userData.timelog.time);


    var log = 0;
    angular.forEach(vm.userData.timelog, function(value, key) {
      console.log(value.time);
      log += value.time;
    }, log);

    var actualLog = parseFloat($rootScope.msToTime(log));

    console.log(actualLog);

    vm.finalSalary = vm.userData.salary * actualLog;
    console.log(vm.finalSalary);

    vm.refreshEmployeeProfile();

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.EmployeeProfile.controller:EmployeeProfile
     * @description
     * My Description rules
     */
    function refreshEmployeeProfile(){

      dataService.employee.getEmployee($stateParams.eid).then(function(res){
          vm.userData = res.data;
          $scope.$broadcast('scroll.refreshComplete');

        var log = 0;
          angular.forEach(vm.userData.timelog, function(value, key) {
            console.log(value.time);
            log += value.time;
          }, log);

          var actualLog = parseFloat($rootScope.msToTime(log));

          console.log(actualLog);

          vm.finalSalary = vm.userData.salary * actualLog;
        },
        function(err){

        });;
    }
	}

}());
