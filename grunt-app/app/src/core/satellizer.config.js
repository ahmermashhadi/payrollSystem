(function () {

  'use strict';

  angular.module('app.core')
    .config(configuration);

  /* @ngInject */
  function configuration() {

    //
    // $authProvider.httpInterceptor = false;
    // $authProvider.withCredentials = false;
    // $authProvider.authToken = 'Bearer';
    // $authProvider.storageType = 'localStorage';
    //
    // $authProvider.loginUrl = API_URL + 'api/users/login';
    // $authProvider.signupUrl = API_URL + 'api/users/register';
    //
    //
    // $authProvider.facebook({
    //   clientId: '524492571088897',
    //   url: API_URL + 'api/users/facebook/',
    //   authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
    //   // redirectUri: window.location.origin + '/',
    //   redirectUri: 'http://localhost/',
    //   requiredUrlParams: ['display', 'scope'],
    //   scope: ['email','public_profile'],
    //   scopeDelimiter: ',',
    //   display: 'popup',
    //   type: '2.0',
    //   popupOptions: {width: 580, height: 400}
    // });

/*
    $authProvider.google({
      url: API_URL + '/api/auth/google/',
      clientId: '227446808862-908ggmoncfcuquuulgn8smte0mrd48nd.apps.googleusercontent.com',
      authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
      redirectUri: window.location.origin,
      requiredUrlParams: ['scope'],
      optionalUrlParams: ['display'],
      scope: ['profile', 'email'],
      scopePrefix: 'openid',
      scopeDelimiter: ' ',
      display: 'popup',
      type: '2.0',
      popupOptions: {width: 452, height: 633}
    });*/

  }

}());
