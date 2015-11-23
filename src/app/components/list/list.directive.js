(function() {
  'use strict';

  angular
    .module('testBBC')
    .directive('pairedMembers', pairedMembers);

  /** @ngInject */
  function pairedMembers() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/list/list.html',
      link: function(scope, elm, attrs, ctrl) {
        console.log(scope.vm);
      }
    };

    return directive;
  }

})();