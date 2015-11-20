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

  describe('inputting names', function(){

    it('should show a list of submitted names', function() {
      person.addName()
      expect(page.namesList.getText()).toBe('John');
    });

    it('should not allow inputting numbers', function(){
      page.nameInput.sendKeys(1);
      expect(page.addButton.isEnabled()).toBe(false);
    });

    it('should not allow an empty input', function(){
      page.nameInput.sendKeys();
      expect(page.addButton.isEnabled()).toBe(false);
    });

    it('should clear the input field on submit', function(){
      person.addName()
      expect(page.nameInput.getText()).toBe('');
    });
  });

});
