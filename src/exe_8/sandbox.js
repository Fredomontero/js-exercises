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

Object.keys(data).map(item => console.log(data[item]));