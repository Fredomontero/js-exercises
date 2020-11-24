const oldObj = {
  name: 'Sara',
  gender: 'Apache Attack Helicopter',
  address: {
      location: {
          city: 'SF',
          state: 'CA'
      },
      preferredLocation: {
          city: 'SF',
          state: ['CA', 'MN']
      },
      other: undefined
  },
  numbers: [1, 2, 3]
};

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

// flatten(oldObj, "oldObj");
console.log(flatten(oldObj, "oldObj"));
/**
*  expected output:
*  {
*    oldObj_name: 'Sara',
*    oldObj_gender: 'Apache Attack Helicopter',
*    oldObj_address_location_city: 'SF',
*    oldObj_address_location_state: 'CA',
*    oldObj_address_preferredLocation_state: 'SF',
*    oldObj_address_preferredLocation_city: ['CA', 'MN'],
*    oldObj_address_other: undefined
*  }
*/
