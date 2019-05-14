// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // create the container array and inner empty subarrays
  const results= [];

  for(let i=0; i< n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n-1;
  let startRow = 0;
  let endRow= n-1;

  // we run through the code below until both of these conditions change, meaning until both the startColumn and the startRow increase. At that point, we start a new iteration of the code.
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      // find the subarray at index equal to startRow, and then find the element in that subarray with an index equal to i
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right column
    for (let j= startRow; j<= endRow; j++) {
      results[j][endColumn]=counter;
      counter++;
    }
    endColumn--;
    
    //Bottom Row     
    for (let k=endColumn; k>=startColumn; k--) {
      results[endRow][k]= counter;
      counter++;
    }
    endRow--;

    // start column
    for (let i=endRow; i>=startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
    return results;
}

module.exports = matrix;


// function matrix(n) {
//   const results= [];
//   let counter = 1;
//   for(let i=0; i< n; i++) {
//     // we need to create n number of empty subarrays
//       results.push([]);
//       for (let j=0; j< n; j++) {
//         while (i>=j) {
//           results[j].push(counter);
//           counter++;
//         } 
//       }
//   }  
// }