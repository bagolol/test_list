(function() {
  'use strict';

  angular
    .module('testBBC')
    .factory('pairService', pairService);

  function pairService() {
    return {
      pairNow: function(list) {
        var pairs = [];
        for (var i = 0; i < list.length; i++) {
          for (var y = i +1; y < list.length; y++) {
            var pair = (list[i] + ' - ' + list[y]);
            pairs.push(pair);
          }
        }
        return pairs;
      }
      }
    }
  })();