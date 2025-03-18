const repeatString = function(string, number) {
    let i = 1;
    let newString = '';
    if(number<0){
        return 'ERROR';
    }
    
    while(i<=number){
        newString += string;
        i++;
        }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
