/**
 * Function that takes an Array as parameter in input and aggregate all the nested elements in nested arrays to the outter one
 * 
 * @param {Array} input - Array to be flatten
 */
function flattenArrayRecursive(input){
   let result = [];
   input.forEach(element => {
    if(element instanceof Array){
      let innerArray = flattenArrayRecursive(element);
      innerArray.forEach(innerElement => result.push(innerElement));
    }else result.push(element)
   });
   return result;
}

/**
 * Function that iterates over an array and returns an array with all the nested elements into the outter one
 * 
 * @param { Array } input - Array to be flatten
 * @param { Array } result - Array to store the result
 */
const iterate = (input, result) => input.reduce((accumulator, element) => {
    if(isArray(element)) iterate(element, accumulator)
    else result.push(element);
    return accumulator;
}, result)

/**
 * Function that verifies the type of the object passed as an argument, if it's an object but not an Array return true otherwise returns false
 * 
 * @param {Array} element - element to verified it's type
 */
const isArray = (element) =>  object instanceof Array

module.exports = flattenArrayRecursive;

