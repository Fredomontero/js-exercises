/**
  * Function that recieves an object and return a new object with the flatten properties of the recivied object
  *
  * @param {Object} oldObject - Object to be flatten
  * @param {String} parentName - Name of the parent
*/
const flattenFunctional = (oldObject, parentName) => iterateObjectProperties(oldObject, parentName)

/**
 * Function that iterates through an object properties
 * 
 * @param {Object} object - object to iterate 
 * @param {String} parentName - name of the parent object
 */
const iterateObjectProperties = (oldObject, parentName) => {
  const sourceObject = Object.assign({}, oldObject)
  let flatObject = {};
  for (let property in sourceObject) {
    if (objectContainsProperty(sourceObject, property)) {
      if (isObject(sourceObject[property])) {
        let innerObject = flattenFunctional(sourceObject[property], parentName + '_' + property);
        for(let prop in innerObject)
          if(objectContainsProperty(innerObject, prop)) flatObject[prop] = innerObject[prop];
      } else {
          flatObject[parentName+"_"+property] =  sourceObject[property];
      }
    }
  }
  return Object.assign({}, flatObject);
};

/**
 * Function that verifies if the Object passed in the object argument has the property passed in the property argument
 * 
 * @param {Object} object - Object where property is going to be searched
 * @param {Object|Number|String|[]} property - property to verify in object
 */
const objectContainsProperty = (object, property) => object.hasOwnProperty(property)

/**
 * Function that verifies the type of the object passed as an argument, if it's an object but not an Array return true otherwise returns false
 * 
 * @param {Object|Number|String|[]} object - object
 */
const isObject = (object) =>  typeof object === "object" && !(object instanceof Array)

module.exports = flattenFunctional;
