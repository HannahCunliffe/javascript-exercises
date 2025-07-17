const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((currentTotal, item) => {
    //returns the result of the calculation to be used as the total value for the next 
    //item that is being iterated through
    return currentTotal += item;
  }, 0)
};

const multiply = function(array) {
  
  let total = 1;
  
  for (let i = 0; i < array.length; i++) {
    total *= array[i];
  }

  return total;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let total = 1;
  
  for (let i = 1; i <= num; i++) {
    total *= i;
  }

  return total;

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
