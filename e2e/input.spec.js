'use strict';

describe('The main view', function () {
  var page;
  var person;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
    person = require('./helpers');
  });

  it('should have title', function () {
    expect(page.mainTitle.getText()).toBe('Pair App');
  });

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
