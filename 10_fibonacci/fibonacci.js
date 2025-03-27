const fibonacci = function(position) {
    //Returneaza numarul din seria Fibonacci
    // Create a string until the input position
    // The third number is the sum of the previous two
    //Loop throw the string created by me 
    // Return the number at the input position
    if(position<0){ return "OOPS"}
    if(!Number.isNaN(position)){
        position = Number(position);
    }
    let fibonacciArray = [0,1];
    for (let i = 2; i<= position; i++){
        fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i-2];
        fibonacciArray.push(fibonacciArray[i]);
    }
    return fibonacciArray[position];
};

// Do not edit below this line
module.exports = fibonacci;
