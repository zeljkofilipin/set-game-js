exports.feature = (features) => {
  var sorted_features = features.sort();
  if (sorted_features[0] === sorted_features[sorted_features.length - 1])
    return true;
  else
    return false;
};
exports.set = (cards) => true;
