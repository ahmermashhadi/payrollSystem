/**
 * @ngdoc controller
 * @name app.Signup.controller:Signup
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.Signup')
		.controller('Signup', Signup);

  /* @ngInject */
	function Signup($ionicHistory){
		var vm = this;

    vm.user = {};
		vm.goBack = goBack;



    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.Signup.controller:Signup
     * @description
     * My Description rules
     */

    function goBack(){
      $ionicHistory.goBack();
		}

	}

}());
