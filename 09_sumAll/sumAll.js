const sumAll = function(num1, num2) {

//returns an error if the parameters are negative numbers or non-integers
if (num1 < 0 || num2 < 0) {
    return 'ERROR'
} else if (Number.isInteger(num1) === false || Number.isInteger(num2) === false) {
    return 'ERROR'
}

let total = 0;

let highestNumber = 0;
let lowestNumber = 0;

//checks which number is higher and assigns values based on those results
// this ensures that the integers between the two numbers are properly summed by the loop
if (num1 > num2) {
    highestNumber = num1;
    lowestNumber = num2;
} else {
    highestNumber = num2;
    lowestNumber = num1;
}

for (let index = lowestNumber; index <= highestNumber; index++) {
    total+= index;
}


return total;


};

// Do not edit below this line
module.exports = sumAll;
