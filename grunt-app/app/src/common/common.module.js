/**
 * @ngdoc overview
 * @name app.common
 * @description Host of all the cross cutting source
 */

(function () {

  'use strict';

  angular.module('app.common', [])

    .run(function ($state, $rootScope, $ionicSideMenuDelegate, $localStorage, Restangular, jwtHelper, dataService, API_URL, $ionicPopup, $openFB, $ionicLoading) {



      $openFB.init({
          appId : '1814937175431563'
      });


      if ($localStorage.token) {
        Restangular.setDefaultHeaders({
          'x-access-token': $localStorage.token
        });
        dataService.user.verifyMe().then(
          function (res) {
            console.log(res);
            $localStorage.token = res.data.token;
            $rootScope.user = res.data.user;
            Restangular.setDefaultHeaders({
              'x-access-token': res.data.token
            });

          },
          function (err) {
            console.log(err);
            delete $localStorage.token;
            delete $rootScope.user;
            Restangular.setDefaultHeaders({
              'x-access-token': ''
            });
          });
      }

      $rootScope.showLoader = function (template) {
        return $ionicLoading.show({
          template: template || '<ion-spinner></ion-spinner><br>Loading...'
        });
      };

      $rootScope.hideLoader = function () {
        return $ionicLoading.hide();
      };


      $rootScope.showDeinalError = function () {
        return $ionicPopup.alert({
          title: 'Access Denied',
          template: '<h5>Incorrect Passcode</h5>'
        });
      };

      $rootScope.checkAdmin = function () {
        $rootScope.showConfirm = function () {
          var myPopup = $ionicPopup.show({
            template: '<input type="password" ng-model="$root.data.password">',
            title: 'Enter Admin Password',
            subTitle: 'Please use the correct notations',
            scope: $rootScope,
            buttons: [
              { text: 'Cancel' },
              {
                text: '<b>Return</b>',
                type: 'button-balanced',
                onTap: function(e) {
                  if ($rootScope.data.password == "123") {
                    $state.go('Login');
                  } else {
                    $rootScope.showDeinalError();
                  }
                }
              }
            ]
          });
        };

        if (!$rootScope.user) {
          if (typeof  cordova != 'undefined') {
            cordova.plugins.Keyboard.close();
          }
          $rootScope.showConfirm();
        }
        else {
          $ionicSideMenuDelegate.$getByHandle('right-side-menu').canDragContent(false);
        }
      };


      $rootScope.showDeletePopup = function (user) {
        $rootScope.showConfirm = function () {
          var myPopup = $ionicPopup.show({
            template: '<h5>Are you sure you want to delete ?</h5>',
            title: 'Confirm',
            scope: $rootScope,
            buttons: [
              { text: 'Cancel' },
              {
                text: '<b>Delete</b>',
                type: 'button-assertive',
                onTap: function() {
                  dataService.employee.deleteEmployee(user._id);
                }
              }
            ]
          });
        };
        if ($rootScope.user) {
          $rootScope.showConfirm();
          $state.go('Channel');
        }
        else {

        }


      };

      $rootScope.logout = function () {
        $rootScope.showLoader();
        dataService.user.logout().then(function (res) {
          $rootScope.hideLoader();
          console.log(res);
          Restangular.setDefaultHeaders({'x-access-token': ''});
          delete $localStorage.token;
          delete $rootScope.user;
          $state.go('Channel');
          window.location.reload(true);
        }, function (err) {
          $rootScope.hideLoader();
          console.log(err);
        })
      }

      $rootScope.msToTime = function(duration) {
        var milliseconds = parseInt((duration%1000)/100)
          , seconds = parseInt((duration/1000)%60)
          , minutes = parseInt((duration/(1000*60))%60)
          , hours = parseInt((duration/(1000*60*60))%24);

        hours = (hours < 10) ? hours : hours;
        minutes = (minutes < 10) ? minutes : minutes;
        seconds = (seconds < 10) ? seconds : seconds;

        return hours + "." + minutes + seconds + milliseconds;
      }

    })
}());
