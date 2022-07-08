const removeFromArray = function(array, ...valueToRemove) {

 // rest parameter to accept a indefinite number of arguements as an array
 //you can see it included in the function arguments, as ...valueToRemove, the ... denotes
 //it as being a rest parameter
 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
 // ^ above for further reference
 //loops through every single array item
    for (const value of valueToRemove) {
        // if the index value is -1 the item isn't present in the array, so it stops there
        // and continues to the next loop interation
        if (array.indexOf(value) === -1) {
            continue;
        };
        // otherwise locates the location of the value to remove in the array
        //then removes it
        let valueIndex = array.indexOf(value);
        array.splice(valueIndex, 1);
    };
  
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
