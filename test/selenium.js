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
    driver.wait(until.titleIs('Set - online card game'), 1000);
  });

  test.it('should get table HTML from the page', function () {
    driver.wait(until.titleIs('Set - online card game'), 1000);
    driver.findElement(By.id('board')).getOuterHtml().then(html => {
      assert.include(html, '<table id="board" class="" border="0">');
    });
  });

  /*jshint -W083 */
  test.it('should solve the game', function () {
    driver.wait(until.titleIs('Set - online card game'), 1000);
    var n = 0;
    for (var i = 1; i < 99; i++) {
      driver.findElement(By.id('board')).getOuterHtml().then(html => {
        var cards = set.htmlToCards(html);
        console.log('i: cards');
        console.log(cards);
        var possibleSets = set.cardsToSets(cards);
        var sets = set.sets(possibleSets);
        console.log('i: sets');
        console.log(sets);
        var firstSet = sets[0];
        driver.takeScreenshot().then((image) => {
          var screenshotFile = `screenshot-${n}.png`;
          console.log(`i: ${screenshotFile}`);
          require('fs').writeFile(screenshotFile, image, 'base64');
          n++;
        });
        if (firstSet) {
          firstSet.forEach(element => {
            driver.findElement(By.css(`img[alt$="${element} "]`)).click();
          });
        } else {
          //debugger;
          console.log('i: open 3 cards');
          driver.isElementPresent(By.id('add_cards')).then(
            element => driver.findElement(By.id('add_cards')).click());
          console.log('w: uh oh, no more cards');
        }
      });
    }
  });
});
