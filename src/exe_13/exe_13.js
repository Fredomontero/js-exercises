const TreeNode = require('./TreeNode');
const tree = {
  children:[
    { data: 1, children:[]},
    { data: 1, children:[]},
  ]
}


const isSameLevel = (tree, num1, num2) => {
  
  let levels = new Map();
  let result = false;

  const checkNode = (node, level) => {
    let levelData = (levels.get(level) !== undefined) ? levels.get(level) : [];
    for(childrenNode of node.children){
      if(childrenNode.data === num1 || childrenNode.data === num2) levelData.push(childrenNode.data);
      if(levelData.includes(num1) && levelData.includes(num2) && levelData.length >= 2){
        result = true;
        break;
      }
      if(childrenNode.children.length > 0) checkNode(childrenNode, level+1);
    }
    levels.set(level, levelData);
    return result;
  }

  return checkNode(tree, 1);
};

module.exports = isSameLevel;

// let result = isSameLevel(tree, 1, 1);
// console.log("Result: ", result);