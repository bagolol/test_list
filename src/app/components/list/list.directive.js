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
      controllerAs: 'vm',
      bindToController: true
    }

    return directive;
  };

  PairController.$inject = ['pairService'];

  /** @ngInject */
  function PairController(pairService) {
    var vm = this;
    vm.pairDevs = function () {
      vm.pairs = pairService.pairNow(vm.list);
    };
    vm.clear = function () {
      vm.list = [];
    }
  }
})();