const reverseString = function(string) {
    //split string into individual characters in an array
    let reversedString = '';
    const chars = string.split('');
    //loop through backwards from the last character, find that in the array, join to output string
    for (i = string.length; i > 0; i--) {
        let letter = chars[i - 1];
        reversedString += letter;
    };

    //checked the provided solution, they came up with a far more succint version:
    //other person's solution code below for future reference:
    // return string.split('').reverse().join('');
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
