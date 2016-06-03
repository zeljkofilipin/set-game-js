var By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    firefox = require('selenium-webdriver/firefox'),
    test = require('selenium-webdriver/testing');

test.describe('Set game', function () {
  var driver;

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
