const fibonacci = function(input) {
    let userInput = Number(input);

    if (userInput < 0) {
        return "OOPS"
    }

    if (userInput === 0) {
        return 0;
    } else if (userInput === 1) {
        return 1;
    }

    let result;
    let num1 = 0;
    let num2 = 1;

    for (let i = 2; i <= userInput; i++) {
        result = num1 + num2;
        num1 = num2;
        num2 = result;
    }

    return num2
};

// Do not edit below this line
module.exports = fibonacci;
