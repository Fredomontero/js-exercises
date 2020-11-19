// const arr = [0,1,2,3,4,5,6,7,8,9];
// const blockSize = 11;

/**
 * Function to reverse by block of length blockSize an array of numbers
 * 
 * @param {Array} arr - array of numbers to reverse by blocks
 * @param {Number} blockSize - length of the block
 */
const reverseBlocks = (arr, blockSize) => {
  let queues = [];
  for(let i = 0; i<arr.length; i++){
    let index = i/blockSize >> 0;
    if(queues[index] === undefined) queues[index] = [];
    queues[index].push(arr[i]);
  }
  for(let i = 0; i<arr.length; i++){
    let index = i/blockSize >> 0;
    arr[i] = queues[index].pop();
  }
}

module.exports = reverseBlocks;

// console.log(arr);
// reverseBlocks(arr, blockSize);
// console.log(arr);
/**
* Expected result:
* [2,1,0,5,4,3,8,7,6,9]
*/