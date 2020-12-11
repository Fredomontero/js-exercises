const TreeNode = require('./TreeNode');

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
tree.children[1].children[1].children.push(new TreeNode(3))
tree.children[1].children[1].children.push(new TreeNode(5))
tree.children[1].children[1].children.push(new TreeNode(9))
tree.children[4].children[0].children.push(new TreeNode(3))
tree.children[4].children[0].children.push(new TreeNode(0))
//Fourth level
tree.children[1].children[1].children[1].children.push(new TreeNode(6))
tree.children[4].children[0].children[1].children.push(new TreeNode(9))
tree.children[4].children[0].children[1].children.push(new TreeNode(4))

const isSameLevel = (tree, num1, num2) => {
  
  let levels = new Map();
  let result = false;

  const checkNode = (node, level) => {
    
    if(node.children.length === 0) return;
    let levelArray = (levels.get(level) !== undefined) ? levels.get(level) : [];
    for(let i = 0; i<node.children.length; i++){
      if(levelArray.includes(node.children[i].data)) result = true;
      levelArray.push(node.children[i].data);
      if(node.children[i].children.length > 0) checkNode(node.children[i], level+1);
    }
    levels.set(level, levelArray);
  }

  result = checkNode(tree, 1);
  console.log(levels);
  console.log("Result: ", result);

};

isSameLevel(tree, 1, 1);