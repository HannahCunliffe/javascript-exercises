const add = function(num1, num2) {
	const total = num1 + num2;
  return total;
};

const subtract = function(num1, num2) {
	const total = num1 - num2;
  return total;
};

const sum = function(array) {
	let total = 0;
  let i = 0;

  if (array.length == 0) {
    return 0;
  }

  do {
    total = total + array[i];
    i++;
  } while (i < array.length);
  return total;
};

const multiply = function(array) {
  let total = 0;
  let firstNum = array[0];
  total = firstNum;

  for (let i = 1; i < array.length; i++) {
    total = total * array[i];
  }
  return total;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  let i = num;
  let total = 1;

  if (num == 0 || num == 1) {
    return 1
  } else {
    for (let i = num; i >= 1; i--) {
      total = total * i;
    }
    return total;
  }
  
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
