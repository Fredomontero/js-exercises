const input = [1,2,3,[4,5,[6,[[7]],8]],[9,10]]
 
function flattenArray(input){
   /* Your implementation goes here */
   let result = [];
   input.forEach(element => {
    if(element instanceof Array){
      let innerArray = flattenArray(element);
      innerArray.forEach(innerElement => result.push(innerElement));
    }else result.push(element)
   });
   return result;
}

console.log(flattenArray(input));
/**
* expected output:
* [1,2,3,4,5,6,7,8,9,10]
*/
