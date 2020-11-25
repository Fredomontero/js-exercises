/**
  * Function that recieves an object and return a new object with the flatten properties of the recivied object
  *
  * @param {Object} oldObject - Object to be flatten
  * @param {String} parentName - Name of the parent
*/

function flatten(oldObject, parentName){
  let flatObject = {};

  const flatify = (oldObject, parentName) => {
    for (let property in oldObject) {
      if (oldObject.hasOwnProperty(property)) {
          if (typeof oldObject[property] == "object" && !(oldObject[property] instanceof Array)) {
            flatify(oldObject[property], parentName + '_' + property);
          } else {
              flatObject[parentName+"_"+property] =  oldObject[property];
          }
      }
    }
  }

  flatify(oldObject, parentName);
  return flatObject;
}

module.exports = flatten;

