(function() {
  'use strict';

  describe('directive navbar', function() {
    // var $window;
    var vm;
    var el;
    var timeInMs;

    beforeEach(module('testBBC'));
    beforeEach(inject(function($compile, $rootScope) {

      el = angular.element('<my-navbar creation-date="' + timeInMs + '"></my-navbar>');

      $compile(el)($rootScope.$new());
      $rootScope.$digest();
      vm = el.isolateScope().vm;
    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });

    it('should have isolate scope object with instanciate members', function() {
      expect(vm).toEqual(jasmine.any(Object));

      expect(vm.creationDate).toEqual(jasmine.any(Number));
      expect(vm.creationDate).toEqual(timeInMs);

      expect(vm.relativeDate).toEqual(jasmine.any(String));
      expect(vm.relativeDate).toEqual('a day ago');
    });
  });
})();
