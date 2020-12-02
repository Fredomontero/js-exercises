const TreeNode = require('./TreeNode');
const buildTree = require('./buildTree');
const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';

/**
* @param {String} tree  
* @param {String} order  'infix' (default) | 'prefix' | 'postfix'
*/
function printTree(tree, order = "infix") {

  let binaryTree = buildTree(tree);
  
  if(order === 'infix') printInfix(binaryTree);
  else if(order === 'prefix') printPrefix(binaryTree);
  else printPostfix(binaryTree);
}

/**
 * Function that prints a binary tree in a prefix order
 * 
 * @param {TreeNode} node - root node of a binary tree
 */
const printPrefix = (node) => {
  const traversePrefix = (node) => {
    if(!node) return;
    console.log(node.data);
    traversePrefix(node.left);
    traversePrefix(node.right);
  }
  traversePrefix(node);
}

/**
 * Function that prints a binary tree in a postfix order
 * 
 * @param {TreeNode} node - root node of a binary tree
 */
const printPostfix = (node) => {
  const traversePostfix = (node) => {
    if(node.left) traversePostfix(node.left);
    if(node.right) traversePostfix(node.right)
    console.log(node.data);
  }
  traversePostfix(node);
}

/**
 * Function that prints a binary tree in an infix order
 * 
 * @param {TreeNode} node - root node of a binary tree
 */
const printInfix = (node) => {
  let queue = [];
  if(!node) return;
  queue.push(node);
  while(queue.length){
    let temp = queue.shift();
    console.log(temp.data);
    if(temp.left) queue.push(temp.left);
    if(temp.right) queue.push(temp.right);
  }

}

printTree(bTree, 'postfix');
