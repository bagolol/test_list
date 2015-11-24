(function() {
  'use strict';

  describe('directive navbar', function() {
    // var $window;
    var vm;
    var el;

    beforeEach(module('testBBC'));
    beforeEach(inject(function($compile, $rootScope) {

      el = angular.element('<my-navbar></my-navbar>');

      $compile(el)($rootScope.$new());
      $rootScope.$digest();
      vm = el.isolateScope().vm;
    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });

  });
})();
