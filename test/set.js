const assert = require('chai').assert;
const set = require('../lib/set');

describe('Set game', function () {

  describe('#set()', function () {

    it('should return true when three cards are a set', function () {
      var cards = [
        'oval open green 2',
        'oval open red 2',
        'oval open blue 2',
      ];
      assert.isTrue(set.set(cards));
    });

    it('should return false when three cards are not a set');/*, function () {
      var cards = [
        "squiggle solid red 1",
        "squiggle striped blue 1",
        "squiggle solid blue 2"
      ];
      assert.isNotTrue(set(cards));
    });*/

  });

  describe('#feature()', function () {

    it('should return true when a feature of three cards is the same', function () {
      var features = [
        'oval',
        'oval',
        'oval',
      ];
      assert.isTrue(set.feature(features));
    });

    it('should return false when a feature of three cards is not the same', function () {
      var features = [
        'squiggle',
        'oval',
        'oval',
      ];
      assert.isNotTrue(set.feature(features));
    });

  });

});
