/**
  * Function that recieves an object and return a new object with the flatten properties of the recivied object
  *
  * @param {Object} oldObject - Object to be flatten
  * @param {String} parentName - Name of the parent
*/

function flattenFunctional(oldObject, parentName){
  let flatObject = {};

  for (let property in oldObject) {
    if (objectContainsProperty(oldObject, property)) {
        if (isObject(oldObject[property])) {
          let temp = flattenFunctional(oldObject[property], parentName + '_' + property);
          for(let prop in temp)
            if(objectContainsProperty(temp, prop)) flatObject[prop] = temp[prop];
        } else {
            flatObject[parentName+"_"+property] =  oldObject[property];
        }
    }
  }

  return flatObject;
}

/**
 * Function that verifies if the Object passed in the object argument has the property passed in the property argument
 * 
 * @param {Object} object - Object where property is going to be searched
 * @param {Object|Number|String|[]} property - property to verify in object
 */
const objectContainsProperty = (object, property) => {
  return object.hasOwnProperty(property)
}

/**
 * Function that verifies the type of the object passed as an argument, if it's an object but not an Array return true otherwise returns false
 * 
 * @param {Object|Number|String|[]} object - object
 */
const isObject = (object) => {
  return typeof object === "object" && !(object instanceof Array)
}


module.exports = flattenFunctional;
