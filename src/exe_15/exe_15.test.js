const { expect } = require('@jest/globals');
const balanceSum = require('./exe_15');

test("Should return 6 for input [1, 2, 3, 4, 9, 9, 2, 7, 10, 13]", () => {
  const numbers = [1, 2, 3, 4, 9, 9, 2, 7, 10, 13];
  let result = balanceSum(numbers);
  expect(result).toBe(6);
});

test("Should return 1 for input [10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];", () => {
  const numbers = [10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  let result = balanceSum(numbers);
  expect(result).toBe(1);
});

test("Should return 4 for input [3, 2, 5, 4, 1, 2, 8, 1, 2, 2]", () => {
  const numbers = [3, 2, 5, 4, 1, 2, 8, 1, 2, 2];
  let result = balanceSum(numbers);
  expect(result).toBe(4);
});

test("Should return 0 for input [11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]", () => {
  const numbers = [11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  let result = balanceSum(numbers);
  expect(result).toBe(0);
});

test("Should return -1 for input [11, 1, 4, 1, 9, 1, 1, 4, 3, 1, 1, 1]", () => {
  const numbers = [11, 1, 4, 1, 9, 1, 1, 4, 3, 1, 1, 1];
  let result = balanceSum(numbers);
  expect(result).toBe(-1);
});

test("Should return -1 for input [7, 1, 4, 3, 9, 1, 8, 4, 3, 1, 1, 1]", () => {
  const numbers = [7, 1, 4, 3, 9, 1, 8, 4, 3, 1, 1, 1];
  let result = balanceSum(numbers);
  expect(result).toBe(-1);
});

test("Should return -1 for input [7, 2, 4, 3, 9, 1, 6]", () => {
  const numbers = [7, 2, 3, 3, 9, 1, 6];
  let result = balanceSum(numbers);
  expect(result).toBe(-1);
});