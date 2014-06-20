function proceduralThinking(arr, fn) {
  var result = [];

  arr.reduce(function (previousValue, currentValue, index, array) {
    result.push(fn(currentValue));
  }, 'ignored');

  return result;
}

function functionalThinking(arr, fn) {
  return arr.reduce(function (result, currentValue, index, array) {
    return result.concat(fn(currentValue, index, array));
  }, []);
}

module.exports = functionalThinking;