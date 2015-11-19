(function() {
  'use strict';

  describe('controllers', function(){
    var vm;
    var $timeout;
    var toastr;

    beforeEach(module('testBBC'));
    beforeEach(inject(function(_$controller_, _$timeout_, _toastr_) {
      vm = _$controller_('MainController');
      $timeout = _$timeout_;
      toastr = _toastr_;
    }));

    it('should define animate class after delaying timeout ', function() {
      $timeout.flush();
      expect(vm.classAnimation).toEqual('rubberBand');
    });

    it('should show a Toastr info and stop animation when invoke showToastr()', function() {
      vm.showToastr();
      expect(toastr.info).toHaveBeenCalled();
      expect(vm.classAnimation).toEqual('');
    });

  });
})();
