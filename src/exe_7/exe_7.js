// const input = "1212223311212223"
// const input = "111123333"
const input = "1111"
/**
* Example 1:
*  Input 1212223311212223
*  Output 1121222
*
* Example 2:
*  Input 111
*  Output 111
*/

const longestRunOfTwoNumbers = (input) => {
  let start = 0;
  let max = {length: 0, start: 0, end: 0};
  let numbers = [];
  let indexes = [];
  for(let i = 0; i<input.length; i++){
    console.log(input[i]);
    let current = input[i];
    if(numbers.length < 2 && !numbers.includes(current)){
      numbers.push(current);
    }else{
      if( i === input.length - 1 && numbers.includes(current)){
        console.log("Third element at position: "+ i + ' with element ' + current);
        if((i + 1 - start) > max.length) max = { length: i + 1 - start, start, end: i + 1}
      }else if(!numbers.includes(current)){
        console.log("Third element at position: "+ i + ' with element ' + current);
        if((i - start) > max.length) max = { length: i - start, start, end: i}
        numbers = [current, input[i-1]];
        start = indexes[input[i-1]];
      }
    }
    if(indexes[current] !== i-1) indexes[current] = i;
  }
  return (max.length !== 0) ? input.slice(max.start, max.end) : input;
}

let result = longestRunOfTwoNumbers(input);
console.log("Result: ", result);