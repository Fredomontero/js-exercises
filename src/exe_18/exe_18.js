/**
 * Function for deep object assingnment  
 * 
 * @param {Object} obj - Object to add a new property
 * @param {String} path - Path to insert new property
 * @param {*} value - Value to assign to the nwe property
 */
const set = (obj, path, value) => {
  let index = 0;
  let properties = path.split(".");
  
  const assign = (currentObject, index) => {
    if(!currentObject.hasOwnProperty([properties[index]])) currentObject[properties[index]] = {};
    if((typeof currentObject[properties[index]] !== "object" || Object.isFrozen(currentObject)) && properties[index + 1] !== undefined) throw "Path key cannot be created or assigned"
    if(properties[index + 1]) assign(currentObject[properties[index]], index + 1);
    else{
      currentObject[properties[index]] = value;
    }
  }
  assign(obj, index);
}

module.exports = set;