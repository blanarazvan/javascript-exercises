const getTheTitles = function(array) {
    //Array of objects
    //Access each object property of title and return it
    let titleArray = [];
    for (let i = 0; i < array.length; i++){
        titleArray.push(array[i].title);
    }
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
