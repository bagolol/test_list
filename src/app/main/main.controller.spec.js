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

  });
})();
