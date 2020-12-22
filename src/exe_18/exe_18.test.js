const { expect } = require('@jest/globals');
const set = require('./exe_18');

test("should assign 29 to user.age", () => {
  const user = {
    id: 101,
    name: "Chris"
  }

  set(user, 'age', 29);
  expect(user.age).toBe(29);
});

test("should assign 'Christian' to user.personalInfo.name", () => {
  const user = {
    id: 101,
  }

  set(user, 'personalInfo.name', "Christian");
  expect(user.personalInfo.name).toBe("Christian");
});

test("should assign 'Alicia Maria' to user.personalInfo.address.street", () => {
  const user = {
    id: 101,
  }

  set(user, 'personalInfo.address.street', "Alicia Maria");
  expect(user.personalInfo.address.street).toBe("Alicia Maria");
});

test("should modify value of user.personalInfo.name to 'Alfredo'", () => {
  const user = {
    id: 101,
    personalInfo: {
      name: "Christian"
    }
  }

  set(user, 'personalInfo.name', "Alfredo");
  expect(user.personalInfo.name).toBe("Alfredo");
});

test("Should throw an error", () => {
  const obj = {
    a: 1
  };
  try{
    set(obj, 'a.b.c', 3);
  }catch(error){
    expect(error).toBe('Path key cannot be created or assigned');
  }
});

test("Should throw an error", () => {
  const obj = {
    a: Object.freeze({})
  };
  try{
    set(obj, 'a.b.c', 1);
  }catch(error){
    expect(error).toBe('Path key cannot be created or assigned');
  }
});