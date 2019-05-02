// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let i = 0;
  let j = str.length - 1;
 
  while (i <= j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
 
  return true;


// reverse and reduce are array methods
  // const reversed = str.split('').reverse().join('');
  // return str === reversed;  
}

// palindrome("penned");

module.exports = palindrome;


// solution 1
// let newString = str.split('').reduce((rev, char) => {rev = char + rev}, '');
// return newString===string;

// Solution 1.2 
  // return str.split('').reduce((acc, cur) => cur + acc) ===str;
  

// Solution 2
// let newString ='';
//   for (let char of str) {
//     newString = char + newString;
// }
// return str===newString;

// Solution 3
  // array.every(function(currentValue(req), index(opt), arr(opt)), thisValue(opt))
  // return str.split('').every((char, index) => {
  //   return char === str[str.length -index -1];
  // })  


// Solution worst time
  // for (let i = Math.floor(str.length / 2); i > -1; i--) {
  //   if (str[i] != str[str.length - i - 1]) {
  //     return false;
  //   }
  // }
  // return true;
  
  