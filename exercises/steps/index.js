// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row=0, str = '') {
  // check base case.  If we have printed all the rows, exit function
  if (n === row) {
    return;
  }

  if (n === str.length) {
    // the full string has been created, so console it, and start a new row
    console.log(str);
    return steps(n, row+1);
  } 

  // working on the same row, decide which charcter to add to row
  const add = str.length <= row ?  '#' : ' ';
  steps(n, row, str + add);

// working on the same row 
  // if (str.length <= row) {
  //   str += '#';
  // } else {
  //   str+= ' ';
  // }
  // steps(n, row, str);
}

module.exports = steps;


// function steps(n) {
//   // iterate through rows from 0 to n
//   for (let row =0; row < n; row++) {
//     // for each row, create empty string to hold values
//     let str='';
//     for (let col=0; col<n; col++) {
//       // if col is less or equal to row, add a # to the string
//       if (col<=row) {
//         str+="#"
//       } else {
//         // if col is greater than row, add an empty space
//         str+= " ";
//       }
//     }
//     // print string inside outter for loop to make sure we end up with n number of console.logs
//     console.log(str);
//   }  
// }

// function steps(n) {
//   if (n === 0) {return;}
//   let line = []; 
//   line.length=n; 
//   for (let i=0; i<n; i++) {
//       line[i]='#';
//       for (let index = i+1; index< n; index++) {
//         if (!line[index]) {
//           line[index]= " ";
//         }
//       }
//       console.log(line.join('')); 
//     }
// }