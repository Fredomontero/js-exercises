const input = [1,2,3,[4,5,[6,[[7]],8]],[9,10]];

function flattenArrayIterative(input){
  let output = [];
  let arrays = [];
  let indexes = [];
  let index = 0;
  do{
    if(input[index] === undefined && arrays.length > 0){
      index = indexes.pop();
      input = arrays.pop();
    }
    if(input[index] instanceof Array){
      arrays.push(input);
      indexes.push(index + 1);
      input = [...input[index]];
      index = 0;
    }else if(input[index] !== undefined){
      output.push(input[index]);
      index++;
    }
  }while(input[index] !== undefined || arrays.length > 0)
  return output;
}

let result =  flattenArrayIterative(input);
console.log(result);
