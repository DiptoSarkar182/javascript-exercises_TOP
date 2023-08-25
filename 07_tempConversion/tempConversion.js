const convertToCelsius = function(temp) {
  let celsius = (5/9)*(temp-32);
  return Math.round(celsius * 10) / 10

};

const convertToFahrenheit = function(temp) {
  let fahrenheit = (temp*(9/5))+32;
  return Math.round(fahrenheit * 10) / 10

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
