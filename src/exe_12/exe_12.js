/**
 * Function that validates if a binary tree is symmetric
 * 
 * @param {TreeNode} root - root of binary tree to validate symmetry
 */
const isTreeSymetric = (root) => {

  const checkSymmetry = (nodeA, nodeB) => {
    if(nodeA === null && nodeB === null) return true;
    if(nodeA && nodeB && nodeA.data === nodeB.data){
      let leftResult = checkSymmetry(nodeA.left, nodeB.right);
      let rightResult = checkSymmetry(nodeA.right, nodeB.left);
      if(leftResult && rightResult) return true;
    }
    return false;
  };

  return checkSymmetry(root.left, root.right);
};

module.exports = isTreeSymetric;