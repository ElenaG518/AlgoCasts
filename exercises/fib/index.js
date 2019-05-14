// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};
  // Just take all the arguments and assign them as an array to this variable called args.
  return function(...args) {
    // if the result has already been computed, then it woudl be saved in cache already, so just return the result
    if (cache[args]) {
      return cache[args];
    }

  const result= fn.apply(this, args);
  cache[args] = result;
  return result;
  };
}


function slowFib(n) {
  if(n< 2) {return n};
  // must make sure taht we are calling fib below in order to call the memoized version of the function.  If we change it to return slowFib(n-1) + slowFib(n-2) then we are not calling the memoized version and it is going to be slow.
    return fib(n-1) + fib(n-2);  
}

const fib=memoize(slowFib)

module.exports = fib;


// function fib(n) {
//   if(n< 2) {return n};
//     return fib(n-1) + fib(n-2);  
// }

// function fib(n) {
//   let res = [];
//   let total =0; 

//   for (let i = 0; i<=n; i++ ) {
//     if (i==0 ) {res.push(0)}
//     else if (i==1) {res.push(1)}
//     else {
//        total = res[i-1] + res[i-2];
      
//       console.log(total);
//       res.push(total);
//      }  
//    }
//   return res[res.length-1];
// }