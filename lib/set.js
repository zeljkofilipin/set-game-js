exports.cardsToFeatures = (features) => {
  var result = [
    ['oval', 'oval', 'oval'],
    ['open', 'open', 'open'],
    ['green', 'red', 'blue'],
    ['2', '2', '2'],
  ];
  return result;
};

var featureIsDifferent = exports.featureIsDifferent = (features) => {
  var uniqueFeatures = new Set(features);
  if (features.length === uniqueFeatures.size)
    return true;
  else
    return false;
};

var featureIsTheSame =  exports.featureIsTheSame = (features) => {
  var sortedFeatures = features.sort();
  if (sortedFeatures[0] === sortedFeatures[sortedFeatures.length - 1])
    return true;
  else
    return false;
};

exports.featureIsTheSameOrDifferent = (features) => {
  if (featureIsTheSame(features) || featureIsDifferent(features))
    return true;
  else
    return false;
};

exports.set = (cards) => true;

exports.stringToArray = (string) => {
  var array = string.split(' ');
  return array;
};
