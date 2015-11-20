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
      scope: {},
      //bindToController: {memberName: '='},
      controller: ListController,
      controllerAs: 'vm'
    };


    return directive;

    /** @ngInject */
    function ListController() {
      var vm = this;
      vm.onlyLetters = /^[A-z]+$/;
      vm.members = [];

      vm.addMember = function () {
        vm.members.push(vm.memberName);
        vm.memberName = "";
      };

      vm.isDuplicated = function (value) {
        var names = vm.members;
        for (var i = 0; i < names.lenght; i++) {
          if (names[i] == value) {
            return true
          }
        };
      };
    }
  };

})();