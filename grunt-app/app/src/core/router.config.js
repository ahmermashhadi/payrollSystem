/**
 * @ngdoc overview
 * @name app.core
 * @description Configuration block for routing
 */

(function(){

  'use strict';

  angular.module('app.core')
    .config(configuration);
    // .run(routingEvents);

  /* @ngInject */
  function configuration($urlRouterProvider){

    $urlRouterProvider.otherwise('channels');

  }

  /* @ngInject */
  // function routingEvents($rootScope,$ionicLoading,$state,$ionicPopup){
  //
  //   var privateStates= ['myProfile','mySchedule.view'];
  //   //on routing error
  //   $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){
  //     //do some logging and toasting
  //     console.log('not Found');
  //     $ionicLoading.hide();
  //     $ionicPopup.alert({
  //       title: 'Network Error',
  //       template: '<h5>Try Again after connecting</h5>'
  //     });
  //   });
  //
  //   $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
  //     //do some logging and toasting
  //     console.log('state error');
  //     $ionicLoading.hide();
  //     if(privateStates.indexOf(toState.name) >= 0 ){
  //
  //     }
  //     else{
  //       $ionicPopup.alert({
  //         title: 'Network Error',
  //         template: '<h5>Try Again after connecting</h5>'
  //       });
  //     }
  //
  //   });
  //
  //   $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
  //     //do some title setting
  //     $rootScope.pageTitle = toState.title || 'app';
  //     console.log('------------------------------------------------>>>');
  //     console.log('lodaing from',fromState.name);
  //     $ionicLoading.show({
  //       template: '<ion-spinner></ion-spinner><br>Loading...'
  //     }).then(function(){
  //       console.log(toState);
  //       console.log($rootScope.user);
  //       if($rootScope.user){
  //         // DO nothing user exist , add code in future for user :A
  //       }
  //       else{
  //         // Check if the destiantion is private :A if yes goto login
  //         if(privateStates.indexOf(toState.name) >= 0 ){
  //           $rootScope.showLogin();
  //           $ionicLoading.hide();
  //         }
  //
  //       }
  //     });
  //
  //   });
  //
  //   //on routing error
  //   $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
  //     //do some title setting
  //     console.log('<<<------------------------------------------------');
  //     console.log('lodaing done to',toState.name);
  //     $ionicLoading.hide().then(function(){
  //       console.log("Loader hide");
  //     });
  //
  //     $rootScope.pageTitle = toState.title || 'app';
  //   });
  //
  // }

}());
