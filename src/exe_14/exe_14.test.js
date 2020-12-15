const { expect } = require('@jest/globals');
const greatestArea = require('./exe_14');

test("Should return 22", () => {
  
  let matrix = [
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0]
  ];

  let area = greatestArea(matrix);
  expect(area).toBe(22);
});

test("Should return 14", () => {
  
  let matrix = [
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  ];

  let area = greatestArea(matrix);
  expect(area).toBe(14);
});

test("Should return 16", () => {
  
  let matrix = [
    [ 1, 1, 1, 1],
    [ 1, 1, 1, 1],
    [ 1, 1, 1, 1],
    [ 1, 1, 1, 1],
  ];

  let area = greatestArea(matrix);
  expect(area).toBe(16);
});

test("Should return 1", () => {
  
  let matrix = [
    [ 1, 0, 0, 0],
    [ 0, 0, 0, 0],
    [ 0, 0, 0, 0],
    [ 0, 0, 0, 0],
  ];

  let area = greatestArea(matrix);
  expect(area).toBe(1);
});

test("Should return 3", () => {
  
  let matrix = [
    [ 1, 1, 1, 0],
    [ 1, 0, 0, 0],
    [ 1, 0, 0, 0],
    [ 0, 0, 0, 0],
  ];

  let area = greatestArea(matrix);
  expect(area).toBe(3);
});

test("Should return 0", () => {
  
  let matrix = [
    [ 0, 0, 0, 0],
    [ 0, 0, 0, 0],
    [ 0, 0, 0, 0],
    [ 0, 0, 0, 0],
  ];

  let area = greatestArea(matrix);
  expect(area).toBe(0);
});