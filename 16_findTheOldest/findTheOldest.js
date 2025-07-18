
const findTheOldest = function (people) {
    filteredArray = people
        //checks if year of death exists, if not calculates age based on current date
        // and birth date, then adds a new key value pair to the object with the person's age
        .map(person => {
            if (!(person.yearOfDeath)) {
                const date = new Date();
                let currentYear = date.getFullYear();
                person.age = currentYear - person.yearOfBirth
            } else {
                person.age = person.yearOfDeath - person.yearOfBirth;
            }

            return person;
        })
        //then sorts the list based on people's age descending from oldest to youngest
        .sort((personA, personB) => {
            return personB.age - personA.age
        })

    //returns the first element in the array since that will be the oldest person
    //after it has been sorted
    return filteredArray[0]

};

// Do not edit below this line
module.exports = findTheOldest;
