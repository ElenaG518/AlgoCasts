// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {  
// convert n to a string, then string to an array, then reverse   array, then back to a string
  const reversed = n.toString().split('').reverse().join('');

// turn string into number, which will get rid of any characters that are not numbers, in this case the sign, and delete 
// any leading zeros.  then multiply by the sign 
// parseInt will return NaN if first character in string is not a number
return parseInt(reversed) * Math.sign(n);
// debugger;
}

// reverseInt(-518);
module.exports = reverseInt;
