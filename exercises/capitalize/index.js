// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // capitalize the very first character of the string
  let newStr = str[0].toUpperCase();

  // for any subsequent string, if the character preceeding it is a space, then the  character will need to be capitalized
  for (let i=1; i< str.length; i++) {
    if ( str[i-1]=== ' ') {
      newStr+=str[i].toUpperCase();
    } else {
      newStr+=str[i];
    }
  }
  return newStr;
  
}

module.exports = capitalize;


// function capitalize(str) {
//   const newArr = [];
//   for (let word of str.split(' ')) {
//     newArr.push(word[0].toUpperCase() + word.slice(1));    
//   }
//   return newArr.join(' ');
// }