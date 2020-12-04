const TreeNode = require('./TreeNode');
const buildTree = require('./buildTree');

/**
* @param {String} tree  
* @param {String} order  'infix' (default) | 'prefix' | 'postfix'
*/
function printTree(tree, order = "infix") {

  let regex = /^\([A-Za-z0-9(),]+\)$/;
  if(regex.test(tree) && tree.match(/\(/g).length === tree.match(/\)/g).length){
    let binaryTree = buildTree(tree);
    if(order === 'infix') return printInfix(binaryTree);
    else if(order === 'prefix') return printPrefix(binaryTree);
    else return printPostfix(binaryTree);
  }else{
    throw `Syntax Error`;
  }
}

/**
 * Function that prints a binary tree in a prefix order
 * 
 * @param {TreeNode} node - root node of a binary tree
 */
const printPrefix = (node) => {
  let result = [];
  const traversePrefix = (node) => {
    if(!node) return;
    console.log(node.data);
    result.push(node.data);
    traversePrefix(node.left);
    traversePrefix(node.right);
  }
  traversePrefix(node);
  return result;
}

/**
 * Function that prints a binary tree in a postfix order
 * 
 * @param {TreeNode} node - root node of a binary tree
 */
const printInfix = (node) => {
  let result = [];
  const traverseInfix = (node) => {
    if(node.left) traverseInfix(node.left);
    console.log(node.data);
    result.push(node.data);
    if(node.right) traverseInfix(node.right)
  }
  traverseInfix(node);
  return result;
}

/**
 * Function that prints a binary tree in an infix order
 * 
 * @param {TreeNode} node - root node of a binary tree
 */
const printPostfix = (node) => {
  console.log("postfix")
  let result = [];
  const traversePostfix = (node) => {
    if(node.left) traversePostfix(node.left);
    if(node.right) traversePostfix(node.right);
    console.log(node.data);
    result.push(node.data);
  }
  traversePostfix(node);
  return result;
}

module.exports = printTree;
