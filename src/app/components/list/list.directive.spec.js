(function() {
  'use strict';

  describe('directive memberList', function() {
    // var $window;
    var vm;
    var el;
    var timeInMs;

    beforeEach(module('testBBC'));
    beforeEach(inject(function($compile, $rootScope) {

      el = angular.element('<member-list></member-list>');

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
      vm.addMember();
      expect(vm.members.length).toEqual(1);
    });



  });
})();
