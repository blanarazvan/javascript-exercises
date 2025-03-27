const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
    const sumOfNumbers = array.reduce((total, currentItem) => {
      return total + currentItem;
    }, 0);
    return sumOfNumbers;
};

const multiply = function(array) {
  const productOfNumbers = array.reduce((total, currentItem) =>{
    return total * currentItem;
  }, 1);
  return productOfNumbers;
};

const power = function(a,b) {
  return (a ** b);
};

const factorial = function(number) {
  let result = 1;
  if(number == 0 || number == 1){
    return 1;
  }
  for(let i = number; i>= 1; i--){
    result = result * i;
  }
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
