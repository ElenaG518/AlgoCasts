// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  // if we have reached base case and end of the pyramid, exit function
  if(n=== row) {
    return;
  }

  // if string recheases maximum length, print new string and start a new row 
  if (2*n-1 === str.length) {
    console.log(str);
    return pyramid(n, row +1);
  }

  // otherwise work on adding more characters to string
  if (str.length )

}

module.exports = pyramid;


// function pyramid(n) {
//   const midpoint = Math.floor((2*n-1)/2);
  
//   for (let row = 0; row < n; row ++) {
//     let level = '';
    
//     for (let col=0; col< 2*n-1 ; col++) {
//       if((col >= midpoint - row) && (col <= midpoint + row)) {
//         level+="#";
//       }
//       else {
//         level+=' ';
//       }
//     }
//     console.log(level);
//   }
// }