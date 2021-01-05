const { expect } = require('@jest/globals');
require('@testing-library/jest-dom');
const generateSierpinskiTriangle = require('./index.js');

test("Testing for n = 1", () => {
  document.body.innerHTML = '<div class="root triangle parent"></div>';
  generateSierpinskiTriangle(1);
  let parents = [...document.querySelectorAll(".parent")];
  expect(parents.length).toBe(4);
  let emptyParents = [...document.querySelectorAll(".parent:empty")];
  expect(emptyParents.length).toBe(3);
});

test("Testing for n = 2", () => {
  document.body.innerHTML = '<div class="root triangle parent"></div>';
  generateSierpinskiTriangle(2);
  let parents = [...document.querySelectorAll(".parent")];
  expect(parents.length).toBe(13);
  let emptyParents = [...document.querySelectorAll(".parent:empty")];
  expect(emptyParents.length).toBe(9);
});

test("Testing for n = 3", () => {
  document.body.innerHTML = '<div class="root triangle parent"></div>';
  generateSierpinskiTriangle(3);
  let parents = [...document.querySelectorAll(".parent")];
  expect(parents.length).toBe(40);
  let emptyParents = [...document.querySelectorAll(".parent:empty")];
  expect(emptyParents.length).toBe(27);
});