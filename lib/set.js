exports.featureIsDifferent = (features) => {
  var uniqueFeatures = new Set(features);
  if (features.length === uniqueFeatures.size)
    return true;
  else
    return false;
};

exports.featureIsTheSame = (features) => {
  var sortedFeatures = features.sort();
  if (sortedFeatures[0] === sortedFeatures[sortedFeatures.length - 1])
    return true;
  else
    return false;
};

exports.set = (cards) => true;

exports.stringToArray = (string) => {
  var array = string.split(' ');
  return array;
};
