'use strict';

/**
 * Implement sumOfOdd function:
 *
 * Given the triangle of consecutive odd numbers:
 *
 *             1
 *          3     5
 *       7     9    11
 *    13    15    17    19
 * 21    23    25    27    29
 * ...
 *
 * Calculate the sum of all numbers in a row of the triangle
 *
 * Row index (starting at index 1) e.g.:
 *
 * rowSumOddNumbers(1); // 1
 * rowSumOddNumbers(2); // 3 + 5 = 8
 * rowSumOddNumbers(-1); // 0
 *
 * @param {number} row
 *
 * @return {number}
 */
function rowSumOddNumbers(row) {
  // write code here
  let j = 0;
  let summ = 0;
  for (let i = 1; i < row; i++) {
    j = j + i;
  }
  for (let i = 1; i <= row; i++) {
    j++;
    summ = summ + 2 * j - 1;
  }
  return summ;
}

module.exports = rowSumOddNumbers;
