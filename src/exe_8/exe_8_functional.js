/**
  * Function that recieves an object and return a new object with the flatten properties of the recivied object
  *
  * @param {Object} oldObject - Object to be flatten
  * @param {String} parentName - Name of the parent
*/
const flattenFunctional = (oldObject, parentName) => iterate(oldObject, parentName, {});

/**
 * Function that iterates over an object properties and returns an object with all the nested properties of the input
 * 
 * @param { Object } object - Object to be flatten
 * @param { String } parentName - Name of the parent object
 * @param { Object } flatObject - Object to store the result
 */
const iterate = (object, parentName, flatObject) => Object.entries(object)
.reduce((accumulator, [key, value]) => {
    if(isObject(value)) iterate(value, `${parentName}_${key}`, accumulator)
    else accumulator[`${parentName}_${key}`] = value;
    return accumulator;
}, flatObject)


/**
 * Function that verifies the type of the object passed as an argument, if it's an object but not an Array return true otherwise returns false
 * 
 * @param {Object|Number|String|[]} object - object
 */
const isObject = (object) =>  typeof object === "object" && !(object instanceof Array)

module.exports = flattenFunctional;
