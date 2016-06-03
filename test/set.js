const assert = require('chai').assert;
const set = require('../lib/set');

describe('Set game', function () {

  describe('#set()', function () {

    it('should return true when cards are a set', function () {
      var cards = [
        'oval open green 2',
        'oval open red 2',
        'oval open blue 2',
      ];
      assert.isTrue(set.set(cards));
    });

    it('should return false when cards are not a set');/*, function () {
      var cards = [
        'squiggle solid red 1',
        'squiggle striped blue 1',
        'squiggle solid blue 2',
      ];
      assert.isNotTrue(set.set(cards));
    });*/

  });

  describe('#featureIsTheSame()', function () {

    it('should return true when a feature is the same for all cards', function () {
      var features = [
        'oval',
        'oval',
        'oval',
      ];
      assert.isTrue(set.featureIsTheSame(features));
    });

    it('should return false when a feature is different for one card', function () {
      var features = [
        'oval',
        'oval',
        'squiggle',
      ];
      assert.isNotTrue(set.featureIsTheSame(features));
    });

    it('should return false when a feature is different for all cards', function () {
      var features = [
        'diamond',
        'oval',
        'squiggle',
      ];
      assert.isNotTrue(set.featureIsTheSame(features));
    });

  });

  describe('#featureIsDifferent()', function () {

    it('should return false when a feature is the same for all cards', function () {
      var features = [
        'oval',
        'oval',
        'oval',
      ];
      assert.isNotTrue(set.featureIsDifferent(features));
    });

    it('should return false when a feature is different for one card', function () {
      var features = [
        'oval',
        'oval',
        'squiggle',
      ];
      assert.isNotTrue(set.featureIsDifferent(features));
    });

    it('should return true when a feature is different for all cards', function () {
      var features = [
        'diamond',
        'oval',
        'squiggle',
      ];
      assert.isTrue(set.featureIsDifferent(features));
    });

  });

});
