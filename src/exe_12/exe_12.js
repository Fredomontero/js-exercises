const buildTree = require('./buildTree');

const tree = buildTree('(1,(2,(3),(4)),(2,(4),(3)))');

// const isSymetric = (tree) => {

// };

const levelOrderTraversal = (root) => {
  let queue = [];
  
  if(!root) return;
  queue.push(root);

  while(queue.length){
    let temp = queue.shift();
    console.log(temp.data);
    if(temp.left) queue.push(temp.left);
    if(temp.right) queue.push(temp.right);
  }

}

levelOrderTraversal(tree);