const convertToCelsius = function(temp) {
  // (0°C × 9/5) + 32
    let temp_f = (temp - 32)*5/9;
    let rounded = Math.round(temp_f * 10) / 10;
    return rounded; 
};

const convertToFahrenheit = function(temp) {
    let temp_c = temp *9/5 + 32;
    let rounded = Math.round(temp_c * 10) / 10;
    return rounded; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
