/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.jumbEl = element(by.css('.jumbotron'));
  this.nameInput = element(by.css('.form-control'))
  this.namesList = element(by.css('ul.members'))
  this.addButton = element(by.css('.btn.btn-default'))
  this.thumbnailEls = element(by.css('body')).all(by.repeater('awesomeThing in main.awesomeThings'));
  this.noNumberError = element(by.css('[ng-message=pattern]'));
  this.fieldEmptyError = element(by.css('[ng-message=required]'));
  this.maxLengthError = element(by.css('[ng-message=maxlength]'));
};



module.exports = new MainPage();
