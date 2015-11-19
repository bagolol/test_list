(function() {
  'use strict';

  angular
    .module('testBBC')
    .directive('memberList', memberList);

  /** @ngInject */
  function memberList() {
    var directive = {
      restrict: 'E',
      scope: {},
      bindToController: {memberName: '='},
      templateUrl: 'app/components/list/list.html',
      controller: ListController,
      controllerAs: 'vm'
    };

    return directive;

    /** @ngInject */
    function ListController() {
      var vm = this;
      vm.members = ['Rocco', 'Giorgio']

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.addMember = function () {
        vm.members.push(vm.memberName);
    }
    }
  }

})();