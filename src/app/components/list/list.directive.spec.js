(function() {
  'use strict';

  describe('directive pairDevs', function() {
    // var $window;
    var vm;
    var el;

    beforeEach(module('testBBC'));
    beforeEach(inject(function($compile, $rootScope) {

      el = angular.element('<pair-devs></pair-devs>');

      $compile(el)($rootScope.$new());
      $rootScope.$digest();
      vm = el.isolateScope().vm;
      // ctrl = el.controller('acmeNavbar');
    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });

    it('should have isolate scope object with instanciate members', function() {
      expect(vm).toEqual(jasmine.any(Object));
    });

    it ('should add members', function(){
      var list = ['Tom', 'John', 'Marc'];
      vm.pairDevs();
      expect(vm.pairs.length).toEqual(3);
    });
  });
})();

