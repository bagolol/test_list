(function() {
  'use strict';

  angular
    .module('testBBC')
    .directive("textOnly", function(){
      return {
       restrict: 'A',
       require: 'ngModel',
       link: function(scope, ele, attrs, ctrl){
          ctrl.$parsers.unshift(function(value) {
            if(value){
              var regex = /^[A-z]+$/;
              var valid = regex.test(value);
              ctrl.$setValidity('textOnly', valid);
            }
            return valid ? value : undefined;
          });
       }
      }
    })
})();












