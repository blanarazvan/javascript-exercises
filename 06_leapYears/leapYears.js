const leapYears = function(year) {
    let CenturyYear = 0, nCenturyYear = 0;
    if(year % 10 == 0){
        CenturyYear = year;
    } else nCenturyYear = year;

    if (CenturyYear != 0){
        if (CenturyYear % 400 == 0){
                 return true;
    } else return false;
    }

    if (nCenturyYear != 0){
       if(nCenturyYear % 4 == 0){
        return true;
    } else return false;
}
};

// Do not edit below this line
module.exports = leapYears;
