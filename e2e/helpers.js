'use strict'
 var page = require('./main.po');


var Helpers = function() {
  this.addName = function(name) {
    page.nameInput.sendKeys(name);
    page.addButton.click();
  }
  this.addThreeDevs = function() {
    this.addName('John');
    this.addName('Luke');
    this.addName('Dave');
  }
};

module.exports = new Helpers();



