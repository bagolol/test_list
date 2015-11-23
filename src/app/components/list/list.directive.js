(function() {
  'use strict';

  angular
    .module('testBBC')
    .directive('pairDevs', pairDevs);

  /** @ngInject */
  function pairDevs() {
    var directive = {
      restrict: 'E',
      scope: {
        list: '=list'
      },
      templateUrl: 'app/components/list/list.html',
      controller: PairController,
      controllerAs: 'vm'
    };

    return directive;

    /** @ngInject */
    function PairController($scope) {
      var vm = this;
      var list = $scope.list
      vm.pairs = [];
      vm.pairDevs = function () {
        for (var i = 0; i < list.length; i++) {
          for (var y = i +1; y < list.length; y++) {
            var pair = (list[i] + ' - ' + list[y]);
            vm.pairs.push(pair);
          }
        }
      };
      vm.clear = function () {
        $scope.list = [];
      }
    }
  }
})();