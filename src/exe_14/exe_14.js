let matrix = [
  [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0]
];

/**
 * Function that returns the greatest area formed by rectangles of 1's
 * 
 * @param {Array} matrix - Binary Matrix
 */
const greatestArea = (matrix) => {
  let state = [];
  let area = 0;
  let maxArea = 0;
  for(let i = 0; i<matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      if(matrix[i][j] === 0) state[j] = matrix[i][j];
      else state[j] = state[j] === undefined ? 0 + matrix[i][j] : state[j] + matrix[i][j];
    }
    area = largestAreaPerRow(state);
    console.log("Area: ", area);
    if(area > maxArea) maxArea = area;
  }
  return maxArea;
}

/**
 * Function that calculates the largest reactangle area by row
 * 
 * @param {Array} heights - Array of sum of consecutives 1's per row
 */
const largestAreaPerRow = (heights) => {
  const n = heights.length;
  let stack = [];
  let currentArea = 0;
  let maxArea = 0;

  heights.forEach((element, index) => {
    while (stack.length && element <= heights[stack[stack.length-1]]) {
      currentArea = calculateArea(index, heights, stack);
      maxArea = (maxArea > currentArea) ? maxArea : currentArea;
    }
    stack.push(index);
  });

  while (stack.length > 0) {
    currentArea = calculateArea(n, heights, stack);
    maxArea = (maxArea > currentArea) ? maxArea : currentArea;
  }

  return maxArea;
};

/**
 * 
 * @param {Number} index - reference index to calculate the width
 * @param {Array} heights - Array with sum of consecutive 1's
 * @param {Array} stack - Stack of indexes
 */
const calculateArea = (index, heights, stack) => {
  let height = heights[stack.pop()];
  let width = (stack.length > 0) ? index - stack[stack.length-1] - 1 : index;
  return height * width;
};

let result = greatestArea(matrix);
console.log("Result: ", result);