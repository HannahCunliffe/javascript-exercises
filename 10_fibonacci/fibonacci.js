const fibonacci = function(numToReturn) {
    let nextNum = 0;
    let num1 = 0;
    let num2 = 1;

    if (numToReturn < 0 ) {
        return "OOPS";
    }

    numToReturn = parseInt(numToReturn);

    for (let i = 1; i <= numToReturn; i++) {
        nextNum = num1 + num2;
        num1 = num2;
        num2 = nextNum;
    }

    return num1;
    
};

// Do not edit below this line
module.exports = fibonacci;
