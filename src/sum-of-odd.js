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
  let sum = 0;

  if (row < 0) {
    return 0;
  }

  for (let i = 1; i <= row - 1; i++) {
    sum += i;
  }

  const firstInRow = sum * 2 + 1;
  let totalSum = firstInRow;

  for (let j = 2; j <= row; j++) {
    totalSum += firstInRow + (j - 1) * 2;
  }

  return totalSum;
}

module.exports = rowSumOddNumbers;
