/**
 * Function that takes an Array as parameter in input and aggregate all the nested elements in nested arrays to the outter one
 * 
 * @param {Array} input - Array to be flatten
 */
function flattenArrayIterative(input){
  let output = [];
  let arrays = [];
  let indexes = [];
  let index = 0;
  do{
    if(input[index] === undefined && arrays.length > 0){
      index = indexes.pop();
      input = arrays.pop();
    }
    if(input[index] instanceof Array){
      arrays.push(input);
      indexes.push(index + 1);
      input = [...input[index]];
      index = 0;
    }else if(input[index] !== undefined){
      output.push(input[index]);
      index++;
    }
  }while(input[index] !== undefined || arrays.length > 0)
  return output;
}

module.exports = flattenArrayIterative;
