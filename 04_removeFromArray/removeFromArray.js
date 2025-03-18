const removeFromArray = function(fullArray, ...eliminatedNumbers) {
    let comparedNumber = 0;
    let newArray = [];
    let k = 0, j = 0;
    for ( let i = 0; i< fullArray.length; i++){// Reading full Array
        comparedNumber = fullArray[i];
        BlackList = []; 
        for ( j = 0; j < eliminatedNumbers.length; j++){// Acting like an Array
            // Compare comparedNumber with each value from eliminatedNumbers
            // before adding into newArray
        if (comparedNumber != eliminatedNumbers[j]){
            
            if (previousNumber != comparedNumber){
            newArray[k] = comparedNumber;
            previousNumber = comparedNumber;
            k++;
            } 
        } 
    }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
