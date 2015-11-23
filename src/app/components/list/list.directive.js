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
      vm.pairDevs = function () {
        console.log($scope.list);

      };
    }
  }
})();