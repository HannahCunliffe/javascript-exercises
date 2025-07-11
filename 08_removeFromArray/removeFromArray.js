const removeFromArray = function(array, ...removalValues) {

    //loops through every single value passed into the function in the arguements
    for (const value of removalValues) {
        //find index of the argument passed in to remove
        let index = array.indexOf(value);
        //if that value is not present in the array, continues to the next value
        if (index === -1) {
            continue;
        } else {
            //continues removing array items with that value until the indexOf no longer
            //finds an item with that value in the array
            do {
                array.splice(index, 1);
            } while (array.indexOf(value) == 1)
        }
        //array.splice(arg - 1, 1);
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
