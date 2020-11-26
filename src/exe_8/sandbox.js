const data = {
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
  }
};

const flatten = (oldObject, parentName) => Object.entries(oldObject).reduce((accumulator, current) => {
    if(isObject(current[1])){
        let innerObject = flatten(current[1], parentName + '_' + current[0]);
        for(const property in innerObject)
            accumulator[property] = innerObject[property]
    }else accumulator[`${parentName}_${current[0]}`] = current[1];
    return accumulator;
}, {})

const isObject = (object) =>  typeof object === "object" && !(object instanceof Array)

let result = flatten(data, 'data');
console.log("RESULT");
console.log(result);
