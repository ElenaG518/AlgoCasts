// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// a character map is an object where we take every character out of a string  and add it as a key to the object, and then the value for each key is the number of times that letter has been found in the string.

function maxChar(str) {
  let chars = {};
  let max=0;
  let maxChar = '';
  // use for of loop for strings and arrays
  for (let char of str) {
      chars[char] =  chars[char] + 1 || 1; 
  }

  // use for in loop for objects
  for ( let keys in chars) {
    if (chars[keys]>max) {
      max=chars[keys];
      maxChar = keys;
    }
} 
  return maxChar;
}

module.exports = maxChar;

// Solutions

// const charMap = {}
//   let max = 0
//   let maxChar = ""
 
//   for(const char of str) {
//     charMap[char] = charMap[char] + 1 || 1 
 
//     if(charMap[char] > max) {
//       max = charMap[char]
//       maxChar = char
//     }
//   }
 
//   return maxChar

// solution 2: mine

// let chars = {};
//   for (let char of str) {
//       chars[char] =  chars[char] + 1 || 1; 
//   }

// const arrKeys = Object.keys(chars);
  
//   let max = 0;
//   let maxChar = '';
//   for (let i = 0; i < arrKeys.length; i++) {
//     if (chars[arrKeys[i]]>max) {
//       max = chars[arrKeys[i]]; 
//       maxChar = arrKeys[i];
//     } 
//   }

//   return maxChar;

