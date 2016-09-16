/**
 * @ngdoc filter
 * @name app.common.filer:imagePlaceholder
 * @description < description placeholder >
 * @param {object} input object to be filtered
 * @returns {object} < returns placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.common')
    .filter('imagePlaceholder', imagePlaceholder);

  /* @ngInject */
  function imagePlaceholder(){

    return function(input){
        if(!(input == undefined || input == null || input == "")){
          return input;
        } else {
           return "images/user.png";
        }
      }
  }

}());
