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
  const num = [];
  let sum = 0;

  const start = row * (row - 1) + 1;
  const end = row * (row + 1) - 1;

  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      num.push(i);
    }
  }
  for (let j = 0; j < num.length; j++) {
    sum += num[j];
  }
  return sum;
}

module.exports = rowSumOddNumbers;
