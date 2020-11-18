const largeArray = [1,3,5,7,9].concat(new Array(5));
const smallArray = [0,2,4,6,8];
const largeArraySize = largeArray.length;

const mergeArrays = (largeArray, smallArray) => {
  let index = largeArray.length - 1;
  let smallPointer = smallArray.length - 1;
  let largePointer = largeArray.length - smallArray.length -1;
  for(index; index >= 0; index--){
    if(largeArray[largePointer] > smallArray[smallPointer])
      largeArray[index] = largeArray[largePointer--]
    else
    largeArray[index] = smallArray[smallPointer--]
  }
}

module.exports = mergeArrays;

// mergeArrays(largeArray, smallArray);
// console.log(largeArray); // Expecting: [0,1,2,3,4,5,6,7,8,9]
// console.log(largeArraySize === largeArray.length)