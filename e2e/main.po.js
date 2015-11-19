/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.jumbEl = element(by.css('.jumbotron'));
  this.nameInput = element(by.css('.form-control'))
  this.namesList = element(by.css('ul.members'))
  this.h1El = this.jumbEl.element(by.css('h1'));
  this.imgEl = this.jumbEl.element(by.css('img'));
  this.addButton = element(by.css('.btn.btn-default'))
  this.thumbnailEls = element(by.css('body')).all(by.repeater('awesomeThing in main.awesomeThings'));
};

module.exports = new MainPage();
