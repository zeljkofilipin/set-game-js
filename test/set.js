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

    it('should return false when cards are not a set', function () {
      var cards = [
        'squiggle solid red 1',
        'squiggle striped blue 1',
        'squiggle solid blue 2',
      ];
      assert.isNotTrue(set.set(cards));
    });

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

  describe('#featureIsTheSameOrDifferent()', function () {

    it('should return true when a feature is the same for all cards', function () {
      var features = [
        'oval',
        'oval',
        'oval',
      ];
      assert.isTrue(set.featureIsTheSameOrDifferent(features));
    });

    it('should return false when a feature is different for one card', function () {
      var features = [
        'oval',
        'oval',
        'squiggle',
      ];
      assert.isNotTrue(set.featureIsTheSameOrDifferent(features));
    });

    it('should return true when a feature is different for all cards', function () {
      var features = [
        'diamond',
        'oval',
        'squiggle',
      ];
      assert.isTrue(set.featureIsTheSameOrDifferent(features));
    });

  });

  describe('#stringToArray()', function () {

    it('should return array when given a string', function () {
      var string = 'oval open green 2';
      var array =  ['oval', 'open', 'green', '2'];

      assert.deepEqual(array, set.stringToArray(string));
    });

  });

  describe('#cardsToFeatures()', function () {

    it('should convert array of cards to array of features, grouped by card', function () {
      var cards = [
        'oval open green 2',
        'oval open red 2',
        'oval open blue 2',
      ];
      var features = [
        ['oval', 'open', 'green', '2'],
        ['oval', 'open', 'red', '2'],
        ['oval', 'open', 'blue', '2'],
      ];

      assert.deepEqual(features, set.cardsToFeatures(cards));
    });

  });

  describe('#cardsToGroupedFeatures()', function () {

    it('should convert array of cards to array of features, grouped by feature', function () {
      var featuresGroupedByCard = [
        ['oval', 'open', 'green', '2'],
        ['oval', 'open', 'red', '2'],
        ['oval', 'open', 'blue', '2'],
      ];
      var featuresGroupedByFeature = [
        ['oval', 'oval', 'oval'],
        ['open', 'open', 'open'],
        ['green', 'red', 'blue'],
        ['2', '2', '2'],
      ];

      assert.deepEqual(featuresGroupedByFeature, set.cardsToGroupedFeatures(featuresGroupedByCard));
    });

  });

  describe('#htmlToCards())', function () {

    it('should convert HTML to cards', function () {
      var html = `
<table id="board" class="" border="0">
<tbody>
<tr>

<td class="card" id="0">
<input name="card[0]" value="0" type="hidden">
<img class="card_sign" src="/images/diamond_solid_red.png" alt="diamond solid red 3 ">
<br>
<img class="card_sign" src="/images/diamond_solid_red.png" alt="diamond solid red 3 ">
<br>
<img class="card_sign" src="/images/diamond_solid_red.png" alt="diamond solid red 3 ">
<br>
</td>

<td class="card" id="1">
<input name="card[1]" value="0" type="hidden">
<img class="card_sign" src="/images/oval_open_green.png" alt="oval open green 3 ">
<br>
<img class="card_sign" src="/images/oval_open_green.png" alt="oval open green 3 ">
<br>
<img class="card_sign" src="/images/oval_open_green.png" alt="oval open green 3 ">
<br>
</td>

<td class="card" id="2">
<input name="card[2]" value="0" type="hidden">
<img class="card_sign" src="/images/oval_solid_green.png" alt="oval solid green 2 ">
<br>
<img class="card_sign" src="/images/oval_solid_green.png" alt="oval solid green 2 ">
<br>
</td>

<td class="card" id="3">
<input name="card[3]" value="0" type="hidden">
<img class="card_sign" src="/images/diamond_open_blue.png" alt="diamond open blue 2 ">
<br>
<img class="card_sign" src="/images/diamond_open_blue.png" alt="diamond open blue 2 ">
<br>
</td>

</tr>
<tr>

<td class="card" id="4">
<input name="card[4]" value="0" type="hidden">
<img class="card_sign" src="/images/oval_striped_red.png" alt="oval striped red 2 ">
<br>
<img class="card_sign" src="/images/oval_striped_red.png" alt="oval striped red 2 ">
<br>
</td>

<td class="card" id="5">
<input name="card[5]" value="0" type="hidden">
<img class="card_sign" src="/images/oval_solid_green.png" alt="oval solid green 3 ">
<br>
<img class="card_sign" src="/images/oval_solid_green.png" alt="oval solid green 3 ">
<br>
<img class="card_sign" src="/images/oval_solid_green.png" alt="oval solid green 3 ">
<br>
</td>

<td class="card" id="6">
<input name="card[6]" value="0" type="hidden">
<img class="card_sign" src="/images/squiggle_open_red.png" alt="squiggle open red 3 ">
<br>
<img class="card_sign" src="/images/squiggle_open_red.png" alt="squiggle open red 3 ">
<br>
<img class="card_sign" src="/images/squiggle_open_red.png" alt="squiggle open red 3 ">
<br>
</td>

<td class="card" id="7">
<input name="card[7]" value="0" type="hidden">
<img class="card_sign" src="/images/diamond_open_green.png" alt="diamond open green 2 ">
<br>
<img class="card_sign" src="/images/diamond_open_green.png" alt="diamond open green 2 ">
<br>
</td>

</tr>
<tr>

<td class="card" id="8">
<input name="card[8]" value="0" type="hidden">
<img class="card_sign" src="/images/squiggle_solid_blue.png" alt="squiggle solid blue 1 ">
<br>
</td>

<td class="card" id="9">
<input name="card[9]" value="0" type="hidden">
<img class="card_sign" src="/images/oval_striped_blue.png" alt="oval striped blue 2 ">
<br>
<img class="card_sign" src="/images/oval_striped_blue.png" alt="oval striped blue 2 ">
<br>
</td>

<td class="card" id="10">
<input name="card[10]" value="0" type="hidden">
<img class="card_sign" src="/images/diamond_striped_blue.png" alt="diamond striped blue 3 ">
<br>
<img class="card_sign" src="/images/diamond_striped_blue.png" alt="diamond striped blue 3 ">
<br>
<img class="card_sign" src="/images/diamond_striped_blue.png" alt="diamond striped blue 3 ">
<br>
</td>

<td class="card" id="11">
<input name="card[11]" value="0" type="hidden">
<img class="card_sign" src="/images/oval_solid_green.png" alt="oval solid green 1 ">
<br>
</td>

</tr>
</tbody>
</table>
`;

      var cards = [
        'diamond solid red 3 ',
        'oval open green 3 ',
        'oval solid green 2 ',
        'diamond open blue 2 ',
        'oval striped red 2 ',
        'oval solid green 3 ',
        'squiggle open red 3 ',
        'diamond open green 2 ',
        'squiggle solid blue 1 ',
        'oval striped blue 2 ',
        'diamond striped blue 3 ',
        'oval solid green 1 ', 
      ];
      assert.deepEqual(cards, set.htmlToCards(html));
    });

  });

});
