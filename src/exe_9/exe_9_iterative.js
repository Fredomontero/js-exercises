const input = [1,2,3,[4,5,[6,[[7]],8]],[9,10]]
 
function flattenArray(input){
  /* Your implementation goes here */
  let index = 0;
  while(input[index] !== undefined ){
    if(input[index] instanceof Array) input.splice(index, 1, ...input[index])
    else index++;
  }
}

flattenArray(input);
console.log(input);
/**
* expected output:
* [1,2,3,4,5,6,7,8,9,10]
*/
