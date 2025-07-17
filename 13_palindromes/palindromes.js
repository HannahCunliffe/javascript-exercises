const palindromes = function (string) {
    
    //changes string to lowercase, removes spaces and non-alphanumerical
    //characters so that the sentence can be properly compared to a reversed
    //version of itself

    let originalString = string
    .toLowerCase()
    //regex to  remove alphanumeric characters and replace with empty spaces
    .replace(/[^a-zA-Z0-9]/g, '')
    .split(" ")
    .join(" ")
    ;

    let reversedString = originalString
    .split('')
    .reverse()
    .join('');
    

    if (reversedString === originalString) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
