// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // create new array to hold the chunks
  const newArr = [];
  // starting from zero and moving in segments of the desired size
  for (let x=0; x<array.length; x+=size) {
    // get chunks of desired size from current array, adn then add the chunk to the new array
    console.log(x);
    newArr.push(array.slice(x,x+size));

  }
  // console.log(array);
  return newArr;
}

module.exports = chunk;


// function chunk(array, size) {
//   const chunked = [];
//   for (let element of array) {
//     // retrieve the last array element in chunked array to see if we can add
//     //more items to it
//     const last = chunked[chunked.length-1];
//     //if chunked is empty, or last is full
//     if (!last || last.length === size) {
//       // add an new array element to chunked
//       chunked.push([element]);
//     // add element to last array element in chunked
//     } else {last.push(element)}
//   }
//   return chunked;
// }