/**
 * Function for deep object assingnment  
 * 
 * @param {Object} obj - Object to add a new property
 * @param {String} path - Path to insert new property
 * @param {*} value - Value to assign to the nwe property
 */
const set = (obj, path, value) => {
  let properties = path.split(".");
  properties.forEach( (property, index, properties) => {
    if(!obj.hasOwnProperty([property])) obj[property] = {};
    if((typeof obj[property] !== "object" || Object.isFrozen(obj) || obj[property] instanceof Array) && properties[index + 1] !== undefined) 
      throw new Error("Path key cannot be created or assigned");
    if(properties[index + 1]) obj = obj[property];
    else obj[property] = value;
  });
}

module.exports = set;