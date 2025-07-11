const reverseString = function(string) {
    let stringArray = Array.from(string);
    stringArray = stringArray.reverse();
    return stringArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
