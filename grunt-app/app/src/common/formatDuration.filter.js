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
    .filter('formatDuration', formatDuration);

  /* @ngInject */
  function formatDuration(){

    return function (input) {
      var totalHours, totalMinutes, totalSeconds, hours, minutes, seconds, result='';

      totalSeconds = input / 1000;
      totalMinutes = totalSeconds / 60;
      totalHours = totalMinutes / 60;

      seconds = Math.floor(totalSeconds) % 60;
      minutes = Math.floor(totalMinutes) % 60;
      hours = Math.floor(totalHours) % 60;

      if (hours !== 0) {
        result += hours+' hours ';

        if (minutes.toString().length == 1) {
          minutes = '0'+minutes;
        }
      }

      result += minutes+' minutes  ';

      if (seconds.toString().length == 1) {
        seconds = '0'+seconds;
      }

      result += seconds + ' seconds';

      return result;
    };
  }

}());
