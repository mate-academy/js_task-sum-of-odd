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
  if (row < 0) {
    return 0;
  }

  const startNumber = row * (row - 1) + 1;
  const lastNumber = startNumber + 2 * (row - 1);
  let sum = 0;

  for (let i = startNumber; i <= lastNumber; i += 2) {
    sum += i;
  }

  return sum;
}

module.exports = rowSumOddNumbers;
