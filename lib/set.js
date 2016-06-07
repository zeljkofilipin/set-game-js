const cardsToGroupedFeatures = exports.cardsToGroupedFeatures = (cards) => {
  mathjs = require('mathjs');
  return mathjs.transpose(cards);
};

const cardsToFeatures = exports.cardsToFeatures = (features) => {
  var result = features.map((element) => {
    array = stringToArray(element);
    return array;
  });
  return result;
};

exports.cardsToSets = (cards) => {
  const Combinatorics = require('js-combinatorics');
  var cmb = Combinatorics.combination(cards, 3);
  var combinations =  cmb.map(element => element);
  return combinations;
};

const featureIsDifferent = exports.featureIsDifferent = (features) => {
  var uniqueFeatures = new Set(features);
  if (features.length === uniqueFeatures.size)
    return true;
  else
    return false;
};

const featureIsTheSame =  exports.featureIsTheSame = (features) => {
  var sortedFeatures = features.sort();
  if (sortedFeatures[0] === sortedFeatures[sortedFeatures.length - 1])
    return true;
  else
    return false;
};

const featureIsTheSameOrDifferent = exports.featureIsTheSameOrDifferent = (features) => {
  if (featureIsTheSame(features) || featureIsDifferent(features))
    return true;
  else
    return false;
};

exports.htmlToCards = (html) => {
  const cheerio = require('cheerio');
  const $ = cheerio.load(html);
  var cards = [];

  for (var i = 0; i <= 11; i++) {
    cards[i] = $(`table#board td#${i} img`).attr('alt').trim();
  }

  return cards;
};

exports.set = (cards) => {
  var featuresByCard = cardsToFeatures(cards);
  var featuresByFeature = cardsToGroupedFeatures(featuresByCard);
  var featuresSameOrDifferent = featuresByFeature.map(
      feature => featureIsTheSameOrDifferent(feature));
  var set = featuresSameOrDifferent.every(element => element === true);
  return set;
};

const stringToArray = exports.stringToArray = (string) => {
  var array = string.split(' ');
  return array;
};
