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
        var name = upcase(vm.memberName);
        vm.members.push(name);
        vm.memberName = '';
        $scope.nameInput.$setUntouched();
      };
      function upcase (name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
      }
    }
  }
})();