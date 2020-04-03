module.exports = function parseStringAsArray(arrayAsString) {
  return arrayAsString.split(',').map(arr => arr.trim() );
}