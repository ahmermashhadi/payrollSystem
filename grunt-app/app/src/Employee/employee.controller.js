/**
 * @ngdoc controller
 * @name app.Employee.controller:Employee
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.Employee')
		.controller('Employee', Employee);

  /* @ngInject */
	function Employee($ionicHistory, dataService, r_getdptEmployees, $scope, $ionicScrollDelegate, $stateParams, $ionicPopover, $timeout){
		var vm = this;

    var currentPosition;
    var stopPosition = 0;
    vm.reverse = false;

		vm.goBack = goBack;
    vm.getScrollPosition = getScrollPosition;
    vm.getStopPosition = getStopPosition;
    vm.openPopup = openPopup;
    vm.sortBy = sortBy;



    console.log(r_getdptEmployees);
    vm.participants = r_getdptEmployees.data;
    /////////////////////
    vm.title = $stateParams.dname;


    if(vm.title == 'hr'){
      vm.title = "Human Resources"
    }
    else{
      vm.title = $stateParams.dname;
    }


    $ionicPopover.fromTemplateUrl('src/common/filterPage.html', {
      scope: $scope,
      controller: 'Employee'
    }).then(function (popover) {
      vm.popover = popover;
    });

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.Employee.controller:Employee
     * @description
     * My Description rules
     */


    function goBack(){
      $ionicHistory.goBack();
		}


    function getScrollPosition() {
      currentPosition = $ionicScrollDelegate.$getByHandle('view-scroll').getScrollPosition().top;
      if(currentPosition < 0 || currentPosition < stopPosition){
        vm.showHeader = true;
      }
      else{
        vm.showHeader = false;
      }
    }

    function getStopPosition() {
      stopPosition = $ionicScrollDelegate.$getByHandle('view-scroll').getScrollPosition().top;
    }

    function openPopup(event) {
      event.preventDefault();
      event.stopPropagation();
      vm.showHeader = true;

      $timeout(function () {
        vm.popover.show(event);
      }, 100)
    }

    function sortBy(propertyName, isReverse) {
      vm.reverse = isReverse;
      vm.propertyName = propertyName;
    }

  }

}());
