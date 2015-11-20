'use strict'
 var page = require('./main.po');


var Helpers = function() {
  this.addName = function() {
    page.nameInput.sendKeys('John');
    page.addButton.click();
  }
};

module.exports = new Helpers();



