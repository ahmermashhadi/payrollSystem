/**
 * @ngdoc controller
 * @name app.Contact.controller:Contact
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.Contact')
		.controller('Contact', Contact);

  /* @ngInject */
	function Contact(){
		var vm = this;

		vm.testFunction = testFunction;

    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.Contact.controller:Contact
     * @description
     * My Description rules
     */
    function testFunction(num){
			console.info('This is a test function');
		}
	}

}());
