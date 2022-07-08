const repeatString = function(string, number) {
    // returns error if negative number entered
    if (number < 0) {
        return("ERROR");
    };
    // initialises the final output variable, loops and adds a repeat of the string to it
    // for the number of times entered into the function
    let outputString = '';
    for (let i = 0; i < number; i++) {
        outputString += string;
    };
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
