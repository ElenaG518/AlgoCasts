// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

// Write a function:

// function solution(N);

// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..2,147,483,647].

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  // let num = N.toString(2);
  let splitByOne = N.toString(2).split('1');
  // let splitByOne = N.split('1');
  // console.log(N);
  console.log("splitByOne ", splitByOne);

// dont count the last element because it is either an empty string, or a zero.  if a zero, it means the string is not flanked by a 1 at the end.
 splitByOne.pop();
 console.log("splitByOnepop ", splitByOne);

 let zerosLength = 0;
for (i=1; i<=splitByOne.length-1; i++) {
  if (splitByOne[i].length > zerosLength) {
          zerosLength = splitByOne[i].length;
        }
}

return zerosLength;
}

// https://repl.it/@elenaG518/BinaryGap