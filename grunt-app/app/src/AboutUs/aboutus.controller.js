/**
 * @ngdoc controller
 * @name app.AboutUs.controller:AboutUs
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.AboutUs')
		.controller('AboutUs', AboutUs);

  /* @ngInject */
	function AboutUs($state, $ionicHistory){
		var vm = this;
    vm.events = $state.current.title;
    $ionicHistory.clearHistory();

		vm.testFunction = testFunction;

    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.AboutUs.controller:AboutUs
     * @description
     * My Description rules
     */
    function testFunction(num){
			console.info('This is a test function');
		}
	}

}());
