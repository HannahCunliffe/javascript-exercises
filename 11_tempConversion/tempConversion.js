const convertToCelsius = function(input) {
  return Number(((input - 32) * 5/9).toFixed(1));
};

const convertToFahrenheit = function(input) {
  return Number((input *  9/5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
