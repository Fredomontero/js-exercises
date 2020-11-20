/**
 * This functions takes a string of numbers as a parameter and finds the longest run of at most 2 numbers
 * 
 * @param {String} input - String of numbers
 */
const longestRunOfTwoNumbers = (input) => {
  let start = 0;
  let max = {length: 0, start: 0, end: 0};
  let numbers = [];
  let indexes = [];
  for(let i = 0; i<input.length; i++){
    let current = input[i];
    if(numbers.length < 2 && !numbers.includes(current)){
      numbers.push(current);
    }else{
      if( i === input.length - 1 && numbers.includes(current)){
        if((i + 1 - start) > max.length) max = { length: i + 1 - start, start, end: i + 1}
      }else if(!numbers.includes(current)){
        if((i - start) > max.length) max = { length: i - start, start, end: i}
        numbers = [current, input[i-1]];
        start = indexes[input[i-1]];
      }
    }
    if(indexes[current] !== i-1) indexes[current] = i;
  }
  return (max.length !== 0) ? input.slice(max.start, max.end) : input;
}

module.exports = longestRunOfTwoNumbers;