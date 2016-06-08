const assert = require('chai').assert;
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;
var firefox = require('selenium-webdriver/firefox');
var test = require('selenium-webdriver/testing');
var driver;

test.describe('Set game', function () {

  test.before(function () {
    driver = new firefox.Driver();
  });

  test.after(function () {
    driver.quit();
  });

  test.it('should open the game', function () {
    driver.get('http://smart-games.org/en/set/start');
    driver.wait(until.titleIs('Set - online card game'), 1000);
  });

  test.it('should get table HTML from the page', function () {
    driver.get('http://smart-games.org/en/set/start');
    driver.wait(until.titleIs('Set - online card game'), 1000);
    driver.findElement(By.id('board')).getOuterHtml().then(html => {
      assert.include(html, '<table id="board" class="" border="0">');
    });
  });
});
