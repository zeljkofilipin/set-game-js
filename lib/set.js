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
