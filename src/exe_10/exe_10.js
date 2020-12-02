const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
// const bTree = '(A,(B),(C))';


/**
* @param {String} tree  
* @param {String} order  'infix' (default) | 'prefix' | 'postfix'
*/
function printTree(tree, order) {

  let binaryTree = buildTree(tree);
  // printPrefix(binaryTree);
  // printPostfix(binaryTree);
  printInfix(binaryTree);

}

const printPrefix = (node) => {
  const traversePrefix = (node) => {
    if(!node) return;
    console.log(node.data);
    traversePrefix(node.left);
    traversePrefix(node.right);
  }
  traversePrefix(node);
}

const printPostfix = (node) => {
  const traversePostfix = (node) => {
    if(node.left) traversePostfix(node.left);
    if(node.right) traversePostfix(node.right)
    console.log(node.data);
  }
  traversePostfix(node);
}

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

class TreeNode{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

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

printTree(bTree);
