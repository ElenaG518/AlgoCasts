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

function pyramid(n, row=0, str='') {
  // if we have reached base case and end of the pyramid, exit function
  if(n === row) {
    return;
  }

  // if string recheases maximum length, print new string and start a new row 
  if (str.length === 2*n-1) {
    console.log(str);
    return pyramid(n, row +1);
  }

  const midpoint = Math.floor((2*n-1)/2);
  
  let add;
  if (midpoint - row <= str.length && midpoint + row >= str.length) {
    add="#";
  } else {
    add=" ";
  }

  pyramid(n, row, str+add);    

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