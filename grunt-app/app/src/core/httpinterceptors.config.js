/**
 * @ngdoc overview
 * @name app.core
 * @description Configuration block for routing
 */

(function () {

  'use strict';

  angular.module('app.core')
    .config(configuration);

  /* @ngInject */
  function configuration($provide, $httpProvider,RestangularProvider) {
    $provide.factory('httpInterceptors',function($q,API_URL,$rootScope,$localStorage){
      return {
        'request': function (config) {
          if(config.url.indexOf(API_URL) >= 0 ){
            console.log('%cAPI CALL TO ----------------------> '+ config.url , 'background: #222; color: #bada55');
          }
          return config;
        },
        'requestError': function (rejection) {
          if(rejection.config.url.indexOf(API_URL) >= 0){
            console.log('%cAPI CALL REQUEST ERROR ----------------------> \n' , 'background: #222; color: #bada55');
            console.log(rejection);
          }
          return $q.reject(rejection);
        },
        'response': function (res) {
          if(res.config.url.indexOf(API_URL) >= 0) {
            console.log('%cAPI RESPONSE FROM----------------------> '+ res.config.url , 'background: #222; color: #bada55');
            console.log('%cAPI RESPONSE DATA----------------------> \n' , 'background: #222; color: #bada55');
            console.log(res.data);
          }
          return res;
        },
        'responseError' : function(rejection){
          console.log(rejection);
          if(rejection.config.url.indexOf(API_URL) >= 0){
            console.log('%cAPI CALL RESPONSE ERROR ----------------------> \n' , 'background: #222; color: #bada55');
            console.log(rejection);
            if(rejection.status != -1){
              if(rejection.data.data){
                if(!rejection.data.data.login) {
                  console.log("Login Expired");
                   delete $localStorage.token ;
                   delete $rootScope.user ;
                  RestangularProvider.setDefaultHeaders({
                    'x-access-token': null
                  });
                }
              }

            }

          }
          return $q.reject(rejection);
        }
      }
    });

    $httpProvider.interceptors.push('httpInterceptors');
  }


}());
