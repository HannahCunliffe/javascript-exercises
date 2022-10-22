const palindromes = function (string) {
   
    //need to convert original string and reversed output to lower case
    //remove all punctuation and spaces from both strings

    const stringLowerCase = string.toLowerCase();

    let processedString = stringLowerCase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")

    /* removes spaces */
                          .replace(/\s+/g,'');

    const stringArray = processedString.split('');

    //uses the spread operator to make a shallow copy of the array for reversal
    const reversedStringArray = [...stringArray]
                                .reverse();

    const originalString = stringArray.toString();

    const reversedString = reversedStringArray.toString();

  console.log(stringArray, + " " + "reversed: " + reversedStringArray);

  /* console.log(originalString + " " + "reversed: " + reversedString) */

    if (originalString == reversedString) {
        return true;
    } else {
        return false;
    };

};

// Do not edit below this line
module.exports = palindromes;
