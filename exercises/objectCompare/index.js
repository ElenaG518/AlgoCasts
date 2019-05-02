// --- Directions
// Given two string, return if the strings are equal
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// a character map is an object where we take every character out of a string  and add it as a key to the object, and then the value for each key is the number of times that letter has been found in the string.

function objectCompare(str1, str2) {
  let chars1 = {};
  let chars2 ={};
  
  // use for of loop for strings and arrays
  // convert strings to character maps
  for (let char of str1) {
      chars1[char] =  chars1[char] + 1 || 1; 
  }

  for (let char of str2) {
    chars2[char] =  chars2[char] + 1 || 1; 
}

// create arrays with the keys of both maps
const objKeys1 = Object.keys(chars1);
const objKeys2 = Object.keys(chars2);

// compare if the key arrays are the same length
if (objKeys1.length != objKeys2.length) {
  console.log('not same length');
  return false
};

// compare if the items are the same in both arrays
    // for (const key of objKeys1) {
    //   if (chars1[key] != chars2[key])
    //   { 
    //     console.log(`for ${key} : in objKeys`);
    //     return false;
    //   } 
    // }

// compare if the keys are the same in both maps
for (const key in chars1) {
  if (chars1[key]!= chars2[key]) {
    console.log("key ", key);
    return false;
  }
}
console.log("they are the same!")
return true;
}

// objectCompare("this is it", "this is it");
// objectCompare("this is it", "this is not it");
// objectCompare("bar", "bat");

module.exports = objectCompare;