// Goodness! What an ugly solution.

module.exports = function arrayMap(arr, fn) {
  var result = [];

  arr.reduce(function (previousValue, currentValue, index, array) {
    result.push(fn(currentValue));
  }, 'ignored');

  return result;
};