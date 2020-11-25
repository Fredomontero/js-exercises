const { expect } = require('@jest/globals');
const flatten = require('./exe_8_imperative');

test('Should return a new object with the flatten properties of the input object', () => {
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
    }
  };
  expect(flatten.declarative(oldObj, "oldObj")).toMatchObject({
    oldObj_name: 'Sara',
    oldObj_gender: 'Apache Attack Helicopter',
    oldObj_address_location_city: 'SF',
    oldObj_address_location_state: 'CA',
    oldObj_address_preferredLocation_city: 'SF',
    oldObj_address_preferredLocation_state: ['CA', 'MN'],
    oldObj_address_other: undefined
  })
});

test('Should return a new object with the flatten properties of the input object', () => {
  const oldObj = {
    name:"Ram",
      age:27,
      vehicles: {
         car:"limousine",
         bike:"ktm-duke",
         airlines:{
            lufthansa : "Air123",
            British_airways : "Brt707"
         }
      }
  };
  expect(flatten.declarative(oldObj, "oldObj")).toMatchObject({
    oldObj_name: 'Ram',
    oldObj_age: 27,
    oldObj_vehicles_car: 'limousine',
    oldObj_vehicles_bike: 'ktm-duke',
    oldObj_vehicles_airlines_lufthansa: 'Air123',
    oldObj_vehicles_airlines_British_airways: 'Brt707'
  })
});