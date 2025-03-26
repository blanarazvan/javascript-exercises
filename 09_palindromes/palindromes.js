const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

  // Create a new reversed string for comparison
  const reversedString = cleanedString.split('').reverse().join('');

  // Return the outcome of the comparison which will either be true or false
  return cleanedString === reversedString;
};


// Do not edit below this line
module.exports = palindromes;


// racecar = .length = 7/2 = 3.5 = 3 
// .length = 10/2 = 5
// 0  6-0+1     0123456
// 0 6-0 1

// 9/2 = 4.5 = 4 