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
      controller: ListController,
      controllerAs: 'vm'
    };

    return directive;

    /** @ngInject */
    function ListController($scope) {
      var vm = this;
      vm.members = [];

      vm.addMember = function () {
        vm.members.push(vm.memberName);
        vm.memberName = '';
        $scope.nameInput.$setUntouched();
      };
    }
  }
})();