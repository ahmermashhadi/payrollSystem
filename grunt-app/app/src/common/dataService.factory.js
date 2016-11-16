/**
 * @ngdoc service
 * @name app.common.dataService
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.common')
    .factory('dataService', dataService);

  /* @ngInject */
  function dataService(Restangular){


    var user = {
      login: function (user) {
        return Restangular.one('users').one('login').post('', user);
      },
      logout: function () {
        return Restangular.one('users').one('logout').get();
      },
      register: function (user) {
        return Restangular.one('users').one('register').post('', user);
      },
      verifyMe : function () {
        return Restangular.one('users').one('me').one('verify').get();
      },
      facebookLogin: function (data) {
        return Restangular.one('users').one('facebook').one('login').post('', data);
      }
    };


    var employee = {

      getAllEmployee : function () {
        return Restangular.one('employee').get();
      },
      createEmployee : function (employee) {
        return Restangular.one('employee').post('', employee);
      },
      getEmployeeByDepartment : function (dname) {
        return Restangular.one('employee').one(dname).get();
      },
      getEmployee : function (eid) {
        return Restangular.one('employee').one('unique').one(eid).get();
      },
      updateEmployee : function (employee) {
        var eid = employee._id;
        return Restangular.one('employee').one('unique').one(eid).customPUT(employee);
      },
      deleteEmployee : function (eid) {
        return Restangular.one('employee').one('unique').one(eid).remove();
      }

    };


    return {
      user : user,
      employee : employee
    };

  }

}());
