/**
  * Function that recieves an object and return a new object with the flatten properties of the recivied object
  *
  * @param {Object} oldObject - Object to be flatten
  * @param {String} parentName - Name of the parent
*/

function flattenDeclarative(oldObject, parentName){
  let flatObject = {};

  for (let property in oldObject) {
    if (objectContainsProperty(oldObject, property)) {
        if (isObject(oldObject)) {
          let innerObject = flattenDeclarative(oldObject[property], parentName + '_' + property);
          for(let prop in innerObject)
            if(objectContainsProperty(innerObject, prop)) flatObject[prop] = innerObject[prop];
        } else {
            flatObject[parentName+"_"+property] =  oldObject[property];
        }
    }
  }

  return flatObject;
}

const objectContainsProperty = (object, property) => {
  return object.hasOwnProperty(property)
}

const isObject = (object) => {
  return typeof oldObject[property] === "object" && !(oldObject[property] instanceof Array)
}


module.exports = flattenDeclarative;
