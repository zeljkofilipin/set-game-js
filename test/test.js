var assert = require('chai').assert;
var set = require('../lib/set');

describe('Set game', function() {

  describe('#set()', function () {

    it('should return true when three cards are a set', function () {
      var cards = [
        "oval open green 2",
        "oval open red 2",
        "oval open blue 2"
      ];
      assert.isTrue(set(cards));
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

});
