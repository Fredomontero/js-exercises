/**
  * Function that recieves an object and return a new object with the flatten properties of the recivied object
  *
  * @param {Object} oldObject - Object to be flatten
  * @param {String} parentName - Name of the parent
*/
const flattenFunctional = (oldObject, parentName) => Object.entries(oldObject).reduce((accumulator, current) => {
  if(isObject(current[1])){
      let innerObject = flattenFunctional(current[1], parentName + '_' + current[0]);
      for(const property in innerObject)
          accumulator[property] = innerObject[property]
  }else accumulator[`${parentName}_${current[0]}`] = current[1];
  return accumulator;
}, {})



/**
 * Function that verifies the type of the object passed as an argument, if it's an object but not an Array return true otherwise returns false
 * 
 * @param {Object|Number|String|[]} object - object
 */
const isObject = (object) =>  typeof object === "object" && !(object instanceof Array)

module.exports = flattenFunctional;
