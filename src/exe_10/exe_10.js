const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
// const bTree = '(A,(B),(C))';


/**
* @param {String} tree  
* @param {String} order  'infix' (default) | 'prefix' | 'postfix'
*/
function printTree(tree, order) {
  
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

  let binaryTree = buildTreeNode(tree);
  console.log("The tree is: ");
  console.log(binaryTree);

}

class TreeNode{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

printTree(bTree);
