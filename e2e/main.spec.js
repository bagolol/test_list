'use strict';

describe('The main view', function () {
  var page;
  var person;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
    person = require('./helpers');
  });

  describe('the homepage', function(){

    it('should show an input field', function () {
      expect(page.nameInput.getAttribute('placeholder')).toBe('Insert name..')
    });

    it('should show no names when the page loads', function () {
      expect(page.namesList.count()).toBe(0);
    });

    it('should show a list of submitted names', function() {
      person.addName('John')
      expect(page.namesList.count()).toBe(1);
    });

  });

  describe('inputting names', function(){


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

  describe('pairing devs', function(){

    it('should show a pairing button when 3 devs have been added', function(){
      person.addThreeDevs();
      expect(page.pairButton.isDisplayed()).toBeTruthy();
    });

    it('should clear the list with a click', function(){
      person.addThreeDevs();
      page.clearButton.click();
      expect(page.namesList.count()).toBe(0);
      expect(page.pairButton.isDisplayed()).toBeFalsy();
    });

    it('should show the pairs under the developers list', function(){
      person.addThreeDevs();
      page.pairButton.click();
      expect(page.namesList.count()).toBe(3);
      expect(page.pairsList.count()).toBe(3);
    });

     it('should update the developers list when a new dev is added to the list', function(){
      person.addThreeDevs();
      page.pairButton.click();
      person.addName('Marc');
      page.pairButton.click();
      expect(page.namesList.count()).toBe(4);
      expect(page.pairsList.count()).toBe(6);
    });
  });

});
