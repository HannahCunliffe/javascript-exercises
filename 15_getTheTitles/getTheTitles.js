const getTheTitles = function(bookArray) {
    let titleArray = bookArray.map((item) => {
        return item.title;
    });

    return titleArray;

}

// Do not edit below this line
module.exports = getTheTitles;
