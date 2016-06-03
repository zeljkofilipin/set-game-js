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

  test.it('should open set game', function () {
    driver.get('http://smart-games.org/en/set/start');
    driver.wait(until.titleIs('Set - online card game'), 1000);
  });

});
