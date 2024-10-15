const convertToCelsius = function(temp) {
  let res = 0.0;

  res = (temp - 32) * (5 / 9);

  return parseFloat(res.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let res = 0.0;

  res = (temp * 9 / 5) + 32;

  return parseFloat(res.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
