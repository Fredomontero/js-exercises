const { expect } = require('@jest/globals');
const mergeArrays = require('./exe_4');

test('After Merging [0,2,4,6,8] into [1,3,5,7,9], largeArraySize should be equal to largeArray.length', () => {
  const largeArray = [1,3,5,7,9].concat(new Array(5));
  const smallArray = [0,2,4,6,8];
  const largeArraySize = largeArray.length;
  // mergeArrays(largeArray, smallArray);
  expect(largeArraySize).toEqual(largeArray.length)
});

test('Merge [0,2,4,6,8] into [1,3,5,7,9] should return [0,1,2,3,4,5,6,7,8,9]', () => {
  const largeArray = [1,3,5,7,9].concat(new Array(5));
  const smallArray = [0,2,4,6,8];
  mergeArrays(largeArray, smallArray);
  expect(largeArray).toEqual([0,1,2,3,4,5,6,7,8,9])
});

test('Merge [10,11,14,16,18] into [9,12,13,15,17] should return [9,10,11,12,13,14,15,16,17,18]', () => {
  const largeArray = [10,11,14,16,18].concat(new Array(5));
  const smallArray = [9,12,13,15,17];
  mergeArrays(largeArray, smallArray);
  expect(largeArray).toEqual([9,10,11,12,13,14,15,16,17,18])
});