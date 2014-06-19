module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function (result, currentValue, index, array) {
    return result.concat(fn(currentValue, index, array));
  }, []);
};