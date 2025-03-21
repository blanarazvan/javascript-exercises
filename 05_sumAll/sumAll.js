const sumAll = function(lowerLimit, upperLimit) {
    // Need to know the limits 
    let i = 0, sum = 0, changeLimits = 0;
    if (lowerLimit < 0 || upperLimit < 0){
        return "ERROR";
    }
    if (Number.isInteger(lowerLimit) == false || Number.isInteger(upperLimit) == false){
        return "ERROR";
    }
    if(lowerLimit > upperLimit){
        changeLimits = lowerLimit;
        lowerLimit = upperLimit;
        upperLimit = changeLimits;
    }
    for (i = lowerLimit; i <= upperLimit; i++){
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
