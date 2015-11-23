'use strict';

describe('Inputting names', function () {
  var page;
  var person;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
    person = require('./helpers');
  });


  it('should not allow inputting numbers and show an error', function(){
    page.nameInput.sendKeys(1);
    expect(page.addButton.isEnabled()).toBe(false);
    expect(page.noNumberError.isDisplayed()).toBeTruthy();
  });

  xit('should not allow an empty input', function(){
    person.addName('')
    expect(page.addButton.isEnabled()).toBe(false);
    expect(page.noNumberError.isDisplayed()).toBeTruthy();
  });

  it('should not allow a very long name', function(){
    page.nameInput.sendKeys('johnjohnjohnjohn');
    expect(page.addButton.isEnabled()).toBe(false);
    expect(page.maxLengthError.isDisplayed()).toBeTruthy();
  });

  xit('should display a message while checking if name is duplicated', function(){
    page.nameInput.sendKeys('John');
    expect(page.nameCheckMessage.isDisplayed()).toBeTruthy();
    expect(page.addButton.isEnabled()).toBe(true);
  });

  it('should not allow to input the same name twice', function(){
    person.addName('John');
    person.addName('John');
    expect(page.existingNameError.isDisplayed()).toBeTruthy();
  });


  it('should clear the input field on submit', function(){
    person.addName()
    expect(page.nameInput.getText()).toBe('');
  });
});
