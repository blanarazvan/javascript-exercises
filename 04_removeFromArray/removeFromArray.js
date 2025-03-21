const removeFromArray = function(fullArray, ...eliminatedNumbers) {
   let newArray = [];
   
    fullArray.forEach((item) =>{
        if(!eliminatedNumbers.includes(item)){
            newArray.push(item);
        }
    })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
