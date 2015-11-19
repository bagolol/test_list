(function() {
  'use strict';

  angular
    .module('testBBC')
    .directive('memberList', memberList);

  /** @ngInject */
  function memberList() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/list/list.html',
      scope: {
          creationDate: '='
      },
      controller: ListController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ListController() {
      var vm = this;
      vm.members = ['test1', 'test2'];

      // "vm.creation" is avaible by directive option "bindToController: true"

    }
  }

})();