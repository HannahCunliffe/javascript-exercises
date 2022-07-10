const sumAll = function(num1, num2) {


// checks if the values entered are integers, if false, returns an error

  if (Number.isInteger(num1) == false || Number.isInteger(num2) == false) {
   console.log("NaN condition reached");
   return "ERROR";
  };

  //uses the Math.sign() function to check if a negative number is entered
  // if the number is negative Math.sign() returns -1

  if (Math.sign(num1) === -1 || Math.sign(num2) === -1) {
    return "ERROR";
  }

  // loop that starts from lowest number of the two inputs, adds it to the total,
  // increments the loop by 1 then adds the next number along to the total
  // finishes when it reaches the other number and adds that

  let total = 0;

    if (num1 > num2) {
        for (i = num2; i <= num1; i++) {
            total += i;
        };
    } else {
        for (i = num1; i <= num2; i++) {
            total += i;
        };
    };

    return total;


};

// Do not edit below this line
module.exports = sumAll;
