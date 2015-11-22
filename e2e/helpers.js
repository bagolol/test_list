'use strict'
 var page = require('./main.po');


var Helpers = function() {
  this.addName = function(name) {
    page.nameInput.sendKeys(name);
    page.addButton.click();
  }
};

module.exports = new Helpers();



