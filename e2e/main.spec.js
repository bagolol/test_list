'use strict';

describe('The main view', function () {
  var page;
  var person;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
    person = require('./helpers');
  });



  // it('should include jumbotron with correct data', function() {
  //   expect(page.h1El.getText()).toBe('\'Allo, \'Allo!');
  //   expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/yeoman.png$/);
  //   expect(page.imgEl.getAttribute('alt')).toBe('I\'m Yeoman');
  // });

  describe('the homepage', function(){

    it('should show an input field', function () {
      expect(page.nameInput.getAttribute('placeholder')).toBe('Add a team member...')
    });

     it('should show no names when the page loads', function () {
      expect(page.namesList.isPresent()).toBeFalsy();
    });
  });

  describe('in', function(){

    it('should show a list of submitted names', function() {
      person.addName()
      expect(page.namesList.getText()).toBe('John');
    });

    it('should not allow inputting numbers and show an error', function(){
      page.nameInput.sendKeys(1);
      expect(page.addButton.isEnabled()).toBe(false);
      expect(page.noNumberError.getText()).toBe('Your input can\'t be a number');
    });

    it('should not allow an empty input', function(){
      page.nameInput.sendKeys();
      expect(page.addButton.isEnabled()).toBe(false);
      expect(page.fieldEmptyError.getText()).toBe('Input can\'t be empty...');
    });

    it('should not allow a very long name', function(){
      page.nameInput.sendKeys('johnjohnjohnjohn');
      expect(page.addButton.isEnabled()).toBe(false);
      expect(page.maxLengthError.getText()).toBe('Your input is too long');
    });

    it('should clear the input field on submit', function(){
      person.addName()
      expect(page.nameInput.getText()).toBe('');
    });
  });

});
