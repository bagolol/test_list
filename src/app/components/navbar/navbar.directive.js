(function() {
  'use strict';

  angular
    .module('testBBC')
    .directive('myNavbar', myNavbar);

  /** @ngInject */
  function myNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm'
    };

    return directive;

    /** @ngInject */
    function NavbarController() {

    }
  }
})();
