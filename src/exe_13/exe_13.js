const isSameLevel = (tree, num1, num2) => {
  
  let levels = new Map();
  let result = false;

  const checkNode = (node, level) => {
    let levelData = (levels.get(level) !== undefined) ? levels.get(level) : [];
    for(childrenNode of node.children){
      if(childrenNode.data === num1 || childrenNode.data === num2) levelData.push(childrenNode.data);
      if(levelData.includes(num1) && levelData.includes(num1) && levelData.length >= 2){
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

// let result = isSameLevel(tree, 3, 3);
// console.log("Result: ", result);