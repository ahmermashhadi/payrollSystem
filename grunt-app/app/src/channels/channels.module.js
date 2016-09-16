/**
 * @ngdoc overview
 * @name app.channels
 * @description < description placeholder >
 */

(function () {

  'use strict';

  angular
    .module('app.channels', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider) {
    $stateProvider
      .state('Channel', {
        url: '/channels',
        cache: false,
        templateUrl: 'src/channels/allChannels.html',
        controller: 'AllChannels as vm'
      });
  }

}());
