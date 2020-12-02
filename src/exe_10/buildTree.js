const TreeNode = require('./TreeNode');

/**
 * Function that creates a binary tree and returns root node
 * 
 * @param {String} tree - Binary tree representation
 */
function buildTree(tree) {
  
  let index = 0;
  let regex = /[A-Za-z0-9]/;

  const buildTreeNode = (tree) => {

    let node = null;
    let value = '';
    
    if(index >= tree.length) return null;
    if(tree[index] === '(') index++;
    while(index < tree.length && regex.test(tree[index])){
      value += tree[index];
      index++;
    }

    if(value.length > 0) node = new TreeNode(value);
    else return null;
    
    if(tree[index] === ','){
      index++;
      node.left = buildTreeNode(tree);
    }

    if(tree[index] === ')'){
      index++;
      return node;
    }

    if(tree[index] === ','){
      index++;
      node.right = buildTreeNode(tree);
    }

    if(tree[index] === ')'){
      index++;
      return node;
    }

    return node;
  }

  return buildTreeNode(tree);
}

module.exports = buildTree;