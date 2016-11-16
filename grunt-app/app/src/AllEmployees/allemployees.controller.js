/**
 * @ngdoc controller
 * @name app.AllEmployees.controller:AllEmployees
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.AllEmployees')
		.controller('AllEmployees', AllEmployees);

  /* @ngInject */
	function AllEmployees(r_getAllEmployees, dataService, $scope, $ionicScrollDelegate, $ionicPopover, $timeout){
		var vm = this;

    vm.showHeader = false;
    var currentPosition;
    var stopPosition = 0;
    vm.reverse = false;


		vm.refreshEmployee = refreshEmployee;
    vm.participants = r_getAllEmployees.data;
    vm.getScrollPosition = getScrollPosition;
    vm.getStopPosition = getStopPosition;
    vm.openPopup = openPopup;
    vm.sortBy = sortBy;


    /////////////////////


    $ionicPopover.fromTemplateUrl('src/common/filterPage.html', {
      scope: $scope,
      controller: 'AllEmployees'
    }).then(function (popover) {
      vm.popover = popover;
    });


    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.AllEmployees.controller:AllEmployees
     * @description
     * My Description rules
     */
    function refreshEmployee(){
      dataService.employee.getAllEmployee().then(function(res){
          vm.participants = res.data;
          $scope.$broadcast('scroll.refreshComplete');

        },
      function(err){

      });
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
    };


  }

}());
