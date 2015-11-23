/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.jumbEl = element(by.css('.jumbotron'));
  this.nameInput = element(by.css('.form-control'));
  this.namesList = element.all(by.repeater('member in vm.members'));
  this.addButton = element(by.css('.btn.btn-default'));
  this.noNumberError = $('[ng-show="nameInput.name.$error.pattern"]');
  this.fieldEmptyError = $('[ng-show="nameInput.name.$error.required"]');
  this.maxLengthError = $('[ng-show="nameInput.name.$error.maxlength"]');
  this.existingNameError = $('[ng-show="nameInput.name.$error.username"]');
  this.nameCheckMessage = $('[ng-show="nameInput.name.$pending.username"]');
  this.pairButton = element(by.css('.btn.btn-info'));
  this.clearButton = element(by.css('.btn.btn-danger'));
};

module.exports = new MainPage();
