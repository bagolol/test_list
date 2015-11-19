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
          memberName: '='
      },
      controller: ListController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ListController() {
      var vm = this;
      vm.members = ['Rocco', 'Giorgio']

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.addMember = function () {
        console.log(vm.TeamMemberName);
        // vm.members.push(vm.newTeamMember);
    }

    }
  }

})();