/**
 * Function that takes an Array as parameter in input and aggregate all the nested elements in nested arrays to the outter one
 * 
 * @param {Array} input - Array to be flatten
 */
function flattenArrayIterative(input){
  let index = 0;
  let output = [...input];
  while(output[index] !== undefined ){
    if(output[index] instanceof Array) output.splice(index, 1, ...output[index])
    else index++;
  }
  return output;
}

module.exports = flattenArrayIterative;
