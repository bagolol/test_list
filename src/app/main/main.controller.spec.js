(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('testBBC'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('MainController');
    }));

    it('should be defined', function() {
      expect(vm).toEqual(jasmine.any(Object));
    });

  });
})();
