/**
 * @ngdoc controller
 * @name app.channels.controller:AllChannels
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.channels')
		.controller('AllChannels', AllChannels);

  /* @ngInject */
	function AllChannels() {
    var vm = this;
////////////// Function Declaration
    vm.goBack = goBack;
////////////// Function Declaration

    function goBack() {
      window.history.back();
    }


  }

}());
