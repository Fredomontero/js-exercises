const { expect } = require('@jest/globals');
const TreeNode = require('./TreeNode');
const isSameLevel = require('./exe_13');

describe('Testing isSameLevel method', () => {

  let tree = new TreeNode(0);
  //First level
  tree.children.push(new TreeNode(1));
  tree.children.push(new TreeNode(2));
  tree.children.push(new TreeNode(3));
  tree.children.push(new TreeNode(5));
  tree.children.push(new TreeNode(7));
  //Second level
  tree.children[1].children.push(new TreeNode(1));
  tree.children[1].children.push(new TreeNode(5));
  tree.children[2].children.push(new TreeNode(0));
  tree.children[4].children.push(new TreeNode(3));
  //third level
  tree.children[1].children[1].children.push(new TreeNode(3));
  tree.children[1].children[1].children.push(new TreeNode(5));
  tree.children[1].children[1].children.push(new TreeNode(9));
  tree.children[4].children[0].children.push(new TreeNode(3));
  tree.children[4].children[0].children.push(new TreeNode(0));
  //Fourth level
  tree.children[1].children[1].children[1].children.push(new TreeNode(6));
  tree.children[4].children[0].children[1].children.push(new TreeNode(9));
  tree.children[4].children[0].children[1].children.push(new TreeNode(4));
  
  test('isSameLevel(tree, 3, 3) must return true', () => {
    let result = isSameLevel(tree, 3, 3);
    expect(result).toBe(true);
  });

  test('isSameLevel(tree, 1, 2) must return true', () => {
    let result = isSameLevel(tree, 1, 2);
    expect(result).toBe(true);
  });

  test('isSameLevel(tree, 9, 4) must return true', () => {
    let result = isSameLevel(tree, 9, 4);
    expect(result).toBe(true);
  });

  test('isSameLevel(tree, 1, 1) must return false', () => {
    let result = isSameLevel(tree, 1, 1);
    expect(result).toBe(false);
  });

  test('isSameLevel(tree, 4, 8) must return false', () => {
    let result = isSameLevel(tree, 4, 8);
    expect(result).toBe(false);
  });

  test('isSameLevel(tree, 9, 9) must return false', () => {
    let result = isSameLevel(tree, 9, 9);
    expect(result).toBe(false);
  });

});