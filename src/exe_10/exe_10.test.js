const { expect } = require('@jest/globals');
const printTree = require('./exe_10');

test("Should return ['A','B','D','E','C','F','H','I','G','J'] for prefix order", () => {
  const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
  let result =  printTree(bTree, 'prefix');
  expect(result).toEqual(['A','B','D','E','C','F','H','I','G','J']);
});

test("Should return ['A','B','C','D','E','F','G','H','I','J'] for infix order", () => {
  const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
  let result =  printTree(bTree, 'infix');
  expect(result).toEqual(['A','B','C','D','E','F','G','H','I','J']);
});

test("Should return ['D','E','B','H','I','F','J','G','C','A'] for postfix order", () => {
  const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
  let result =  printTree(bTree, 'postfix');
  expect(result).toEqual(['D','E','B','H','I','F','J','G','C','A']);
});

test("Expect error to be thrown when input has invalid syntax", () => {
  const bTree = '(A,(B,(D),*/*//765(E)),(C,(F,(H),(I)),(G,,(J))))*/*/*';
  try{
    let result =  printTree(bTree, 'postfix');
  }catch(error){
    expect(error).toBe('Syntax Error');
  }
});

test("Expect error to be thrown when input has invalid syntax", () => {
  const bTree = '(A,(B),(c)';
  try{
    let result =  printTree(bTree, 'postfix');
  }catch(error){
    expect(error).toBe('Syntax Error');
  }
});

test("Expect error to be thrown when input has invalid syntax", () => {
  const bTree = '(A,(B),,(c))';
  try{
    let result =  printTree(bTree, 'postfix');
  }catch(error){
    expect(error).toBe('Syntax Error');
  }
});