(function() {
  'use strict';

  angular
    .module('testBbc')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
