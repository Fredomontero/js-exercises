/**
 * Function that returns the index that balances the left and right sum, if no such position exists returns -1
 * 
 * @param {Array} numbers - Array of natural numbers to perform the left and right sum balance
 */
const balanceSum = (numbers) => {
  let right = numbers.length - 1;
  let left = 0;
  let sum = numbers[left++] - numbers[right--];
  while(left <= right) sum = (sum <= 0) ? sum + numbers[left++] : sum - numbers[right--];
  return (sum === 0) ? right : -1;
}

module.exports = balanceSum;