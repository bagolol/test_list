'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  // it('should include jumbotron with correct data', function() {
  //   expect(page.h1El.getText()).toBe('\'Allo, \'Allo!');
  //   expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/yeoman.png$/);
  //   expect(page.imgEl.getAttribute('alt')).toBe('I\'m Yeoman');
  // });

  it('should show an input field', function () {
    expect(page.nameInput.getAttribute('placeholder')).toBe('Add a team member...')
  });

   it('should show no names when the page loads', function () {
    expect(page.namesList.isPresent()).toBeFalsy();
  });

   it('should show a list of submitted names', function() {
      page.nameInput.sendKeys('John');
      page.addButton.click();
      expect(page.namesList.getText()).toBe('John');
   })

});
