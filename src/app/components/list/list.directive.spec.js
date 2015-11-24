(function() {
  'use strict';
  describe('directive pairDevs', function() {

    var scope, compile, validHTML;


    validHTML = '<pair-devs list="[1, 2]"></pair-devs>';

    beforeEach(module('testBBC'));

    beforeEach(inject(function($compile, $rootScope){
        scope = $rootScope.$new();
        compile = $compile;
    }));

    function create() {
        var elem, compiledElem;
        elem = angular.element(validHTML);
        compiledElem = compile(elem)(scope);
        scope.$digest();

        return compiledElem;
    }

    it('scope.list should be defined', function() {
      var el = create();
      expect(el.isolateScope().list).toBeDefined();
    });

    it('should have isolate scope object', function() {
      var el = create();
      var vm = el.isolateScope().vm;
      expect(vm).toEqual(jasmine.any(Object));
    });

    it('should be compiled', function() {
      var el = create();
      expect(el.html()).not.toEqual(null);
    });
  });
})();

