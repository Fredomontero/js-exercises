const { expect } = require('@jest/globals');
const buildTree = require('./buildTree');
const isTreeSymetric = require('./exe_12');

test("Should return true because the input is a representation of a symmetric binary tree", () => {
  const tree = buildTree('(A,(B),(B))');
  let result =  isTreeSymetric(tree);
  expect(result).toBe(true);
});

test("Should return true because the input is a representation of a symmetric binary tree", () => {
  const tree = buildTree('(1,(2,(3),(4,(5))),(2,(4,,(5)),(3))');
  let result =  isTreeSymetric(tree);
  expect(result).toBe(true);
});

test("Should return true because the input is a representation of a symmetric binary tree", () => {
  const tree = buildTree('(1,(2,(3),(4)),(2,(4),(3))');
  let result =  isTreeSymetric(tree);
  expect(result).toBe(true);
});

test("Should return false because the input is a representation of a non symmetric binary tree", () => {
  const tree = buildTree('(A,(B),(C))');
  let result =  isTreeSymetric(tree);
  expect(result).toBe(false);
});

test("Should return false because the input is a representation of a non symmetric binary tree", () => {
  const tree = buildTree('(1,(2,(3),(4,(5),(6))),(2,(4,,(5)),(3))');
  let result =  isTreeSymetric(tree);
  expect(result).toBe(false);
});

test("Should return false because the input is a representation of a non symmetric binary tree", () => {
  const tree = buildTree('(1,(2,(3)),(2,(3))');
  let result =  isTreeSymetric(tree);
  expect(result).toBe(false);
});