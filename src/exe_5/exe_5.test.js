const { expect } = require('@jest/globals');
const reverseBlocks = require('./exe_5');

test('Reverse [0,1,2,3,4,5,6,7,8,9] by blocks of length 3 should return [2,1,0,5,4,3,8,7,6,9]', () => {
  const arr = [0,1,2,3,4,5,6,7,8,9];
  const blockSize = 3;
  reverseBlocks(arr, blockSize);
  expect(arr).toEqual([2,1,0,5,4,3,8,7,6,9])
});

test('Reverse [0,1,2,3,4,5,6,7,8,9] by blocks of length 2 should return [1,0,3,2,5,4,7,6,9,8]', () => {
  const arr = [0,1,2,3,4,5,6,7,8,9];
  const blockSize = 2;
  reverseBlocks(arr, blockSize);
  expect(arr).toEqual([1,0,3,2,5,4,7,6,9,8])
});

test('Reverse [0,1,2,3,4,5,6,7,8,9] by blocks of length 1 should return [0,1,2,3,4,5,6,7,8,9]', () => {
  const arr = [0,1,2,3,4,5,6,7,8,9];
  const blockSize = 1;
  reverseBlocks(arr, blockSize);
  expect(arr).toEqual([0,1,2,3,4,5,6,7,8,9])
});

test('Reverse [0,1,2,3,4,5,6,7,8,9] by blocks of length 10 should return [9,8,7,6,5,4,3,2,1,0]', () => {
  const arr = [0,1,2,3,4,5,6,7,8,9];
  const blockSize = 10;
  reverseBlocks(arr, blockSize);
  expect(arr).toEqual([9,8,7,6,5,4,3,2,1,0])
});

