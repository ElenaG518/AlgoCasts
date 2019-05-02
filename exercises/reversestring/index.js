// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
//   // Solution 5
// // string can be traversed as an array, but it is NOT an array!!!!!
let reversed = '';
for (let char of str) {
    reversed = char + reversed;

//     // debugger;
}
return reversed;
}


// reverse('asdf');

// module.exports = reverse;

// Solution 1 
// return str.split("").reverse().join("");

//Solution 2 
// let strArray = str.split("");
// strArray.reverse();
// return strArray.join('');

// Solution 3
// let strArray = str.split("");
// let revArray = [];
// for (let i = strArray.length-1; i >= 0; i--) {
//     revArray.push(strArray[i]);
// }
// return revArray.join('');

// Solution 4
// ECMAScript 5 (2009) allows property access [ ] on strings:
// It makes strings look like arrays (but they are not)
// If no character is found, [ ] returns undefined, while charAt() returns an empty string.
// It is read only. str[0] = "A" gives no error (but does not work!)
// let reversed ='';
// for (let i=0; i<str.length; i++) {
//   reversed= str[i]+reversed;
// }
// return reversed;

// Solution 5
// string can be traversed as an array, but it is NOT an array!!!!!
// let reversed = "";
// for (let char of str) {
//     reversed = char + reversed;
// }
// return reversed;

// Solution 5
// turn string into Array, then use reduce method on array to put it back together into a string
// reduce takes two arguments, a fuction that will manipulate the data, and an initial value.

// array.reduce(function(total(required), currentValue(required), currentIndex(opt), arr opt), initialValue)
// return str.split('').reduce((rev, char) => char + rev, '');

// array.reduce(function(total(required), currentValue(required), currentIndex(opt), arr opt), initialValue)

// return str.split('').reduce((rev, char) => char + rev, '');