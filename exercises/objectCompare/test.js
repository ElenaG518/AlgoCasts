const objectCompare = require('./index');

test('palindrome function is defined', () => {
  expect(typeof objectCompare).toEqual('function');
});

test('"this is it"  and "this is it" are the same', () => {
  expect(objectCompare('this is it', 'this is it')).toBeTruthy();
});

test('"this is it"  and "this is not it" to be false', () => {
  expect(objectCompare('this is it', 'this is not it')).toBeFalsy();
});

test('"cat" and "car"  are not the same', () => {
  expect(objectCompare('cat', 'car')).toBeFalsy();
});

test('"Fish" and  "hsif" are not the same', () => {
  expect(objectCompare('Fish', 'hsif')).toBeFalsy();
});

