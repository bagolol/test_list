'use strict';

describe('Pairing developers', function () {
  var page;
  var person;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
    person = require('./helpers');
  });


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
