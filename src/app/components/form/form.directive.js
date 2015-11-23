(function() {
  'use strict';

  angular
    .module('testBBC')
    .directive('nameInput', nameInput);

  /** @ngInject */
  function nameInput() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/form/form.html',
      scope: {},
      //bindToController: {memberName: '='},
      controller: ListController,
      controllerAs: 'vm'
    };

    return directive;

    /** @ngInject */
    function ListController() {
      var vm = this;
      vm.submitted = false;
      vm.members = [];

      vm.addMember = function () {
        vm.members.push(vm.memberName);
        vm.memberName = null;
      };
    }
  }

})();