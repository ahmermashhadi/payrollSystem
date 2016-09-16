/**
 * @ngdoc controller
 * @name app.common.controller:Common
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.common')
		.controller('Common', Common);

  /* @ngInject */
	function Common(){
		var vm = this;

    vm.testFunction = testFunction;

    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.common.controller:Common
     * @description
     * My Description rules
     */

    function testFunction(num){
			console.info('This is a test function');
		}
	}

}());
