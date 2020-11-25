/**
  * Function that recieves an object and return a new object with the flatten properties of the recivied object
  *
  * @param {Object} oldObject - Object to be flatten
  * @param {String} parentName - Name of the parent
*/

function flattenImperative(oldObject, parentName){
  let flatObject = {};

  for (let property in oldObject) {
    if (oldObject.hasOwnProperty(property)) {
        if (typeof oldObject[property] === "object" && !(oldObject[property] instanceof Array)) {
          let temp = flattenImperative(oldObject[property], parentName + '_' + property);
          for(let prop in temp)
            if(temp.hasOwnProperty(prop)) flatObject[prop] = temp[prop];
        } else {
            flatObject[parentName+"_"+property] =  oldObject[property];
        }
    }
  }

  return flatObject;
}


module.exports = flattenImperative;

