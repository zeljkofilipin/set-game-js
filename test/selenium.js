const assert = require('chai').assert;
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;
var firefox = require('selenium-webdriver/firefox');
var test = require('selenium-webdriver/testing');
var driver;
const set = require('../lib/set');

test.describe('Set game', function () {

  test.before(function () {
    driver = new firefox.Driver();
    driver.get('http://smart-games.org/en/set_classic/start/10');
  });

  test.after(function () {
    driver.quit();
  });

  test.it('should open the game', function () {
    driver.getTitle().then((title) => {assert.strictEqual(title, 'Set - online card game');});
  });

  test.it('should get table HTML from the page', function () {
    driver.findElement(By.id('board')).getOuterHtml().then(html => {
      assert.include(html, '<table id="board" class="" border="0">');
    });
  });

  /*jshint -W083 */
  test.it('should solve the game', function () {
    for (var i = 0; i < 11; i++) {
      driver.findElement(By.id('board')).getOuterHtml().then(html => {
        var cards = set.htmlToCards(html);
        var possibleSets = set.cardsToSets(cards);
        var sets = set.sets(possibleSets);
        var firstSet = sets[0];
        firstSet.forEach(element => {
          driver.findElement(By.css(`img[alt$="${element} "]`)).click();
        });
      });
    }

    driver.findElement(By.css('#menu > p:nth-child(3)')).getText().then(
      text => assert.strictEqual(text, 'Sets found: 10 / 10'));
  });
});
