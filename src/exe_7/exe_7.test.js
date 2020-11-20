const { expect } = require('@jest/globals');
const longestRunOfTwoNumbers = require('./exe_7');

test('longestRunOfTwoNumbers 1212223311212223 should return 1121222', () => {
  const input = '1212223311212223';
  expect(longestRunOfTwoNumbers(input)).toEqual('1121222');
});

test('longestRunOfTwoNumbers 111123333 should return 11112', () => {
  const input = '111123333';
  expect(longestRunOfTwoNumbers(input)).toEqual('11112');
});

test('longestRunOfTwoNumbers 1111233333 should return 233333', () => {
  const input = '1111233333';
  expect(longestRunOfTwoNumbers(input)).toEqual('233333');
});

test('longestRunOfTwoNumbers 11111 should return 11111', () => {
  const input = '11111';
  expect(longestRunOfTwoNumbers(input)).toEqual('11111');
});

test('longestRunOfTwoNumbers 1121222121212121212 should return 1121222121212121212', () => {
  const input = '1121222121212121212';
  expect(longestRunOfTwoNumbers(input)).toEqual('1121222121212121212');
});