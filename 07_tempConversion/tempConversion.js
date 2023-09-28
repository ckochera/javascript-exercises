// function to convert degrees Fahrenheit to Celsius

const convertToCelsius = (degreesF) => {
    let celsiusFormula = ((degreesF - 32) * 0.5556);
    let celsiusTemp = Math.round(celsiusFormula * 10) / 10;
    return celsiusTemp;
};

convertToCelsius(-100);

// function to convert degrees Celsius to Fahrenheit

const convertToFahrenheit = function(degreesC) {
  let fahrenheitFormula = ((degreesC * 1.8) + 32);
  let fahrenheitTemp = Math.round(fahrenheitFormula * 10) / 10;
  return fahrenheitTemp;
};

convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
