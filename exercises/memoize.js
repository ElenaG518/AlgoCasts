
function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    };

    const result = fn.apply(this, args);
    cache[args]=result;
    return result;
  }
}


function fib(n) {
  if (n==0) {
    return 0;
  }
  if (n==1) {
    return 1;
  }
  return fib(n-2) + fib(n-1);
}

fib = memoize(fib);

fib(5);