const { expect } = require('@jest/globals');
const flattenArrayIterative = require('./exe_9_iterative');
const flattenArrayRecursive = require('./exe_9_recursive');

test('Should return a flatten array', () => {
  const input = [1,2,3,[4,5,[6,[[7]],8]],[9,10]];
  let flattenArray =  flattenArrayRecursive(input);
  expect(flattenArray).toEqual([1,2,3,4,5,6,7,8,9,10]);
});

test('Should return a flatten array', () => {
  const input = [1,2,[3,4,[5,6,[7,8,[9,10]]]]];
  let flattenArray =  flattenArrayIterative(input);
  expect(flattenArray).toEqual([1,2,3,4,5,6,7,8,9,10]);
});

test('Should return a flatten array', () => {
  const input = [[[[1, 2, 3, 4, 5]]]];
  let flattenArray =  flattenArrayIterative(input);
  expect(flattenArray).toEqual([1,2,3,4,5]);
});

test('Should return a flatten array', () => {
  const input = [[[[1]]],[2],3,4,5];
  let flattenArray =  flattenArrayIterative(input);
  expect(flattenArray).toEqual([1,2,3,4,5]);
});

test('Should return a flatten array', () => {
  const input = [1,2,3,[4,5,[6,[[7]],8]],[9,10]];
  let flattenArray =  flattenArrayIterative(input);
  expect(flattenArray).toEqual([1,2,3,4,5,6,7,8,9,10]);
});

test('Should return a flatten array', () => {
  const input = [1,2,[3,4,[5,6,[7,8,[9,10]]]]];
  let flattenArray =  flattenArrayRecursive(input);
  expect(flattenArray).toEqual([1,2,3,4,5,6,7,8,9,10]);
});

test('Should return a flatten array', () => {
  const input = [[[[1, 2, 3, 4, 5]]]];
  let flattenArray =  flattenArrayRecursive(input);
  expect(flattenArray).toEqual([1,2,3,4,5]);
});

test('Should return a flatten array', () => {
  const input = [[[[1]]],[2],3,4,5];
  let flattenArray =  flattenArrayRecursive(input);
  expect(flattenArray).toEqual([1,2,3,4,5]);
});