(function() {
  'use strict';
  describe('directive nameInput', function() {

    var scope, compile, validHTML;


    validHTML = '<name-input></name-input>';

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

    it('should be compiled', function() {
      var el = create();
      expect(el.html()).not.toEqual(null);
    });
  });
})();

