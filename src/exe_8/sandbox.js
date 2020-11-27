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

const flatten = (object, parentName) => {
    return iterate(object, parentName, {});
}

const iterate = (object, parentName, flatObject) => Object.entries(object)
.reduce((accumulator, [key, value]) => {
    if(isObject(value)) iterate(value, parentName + '_' + key, accumulator)
    else accumulator[`${parentName}_${key}`] = value;
    return accumulator;
}, flatObject)

const isObject = (object) =>  typeof object === "object" && !(object instanceof Array)

console.log(flatten(data, 'data'));
