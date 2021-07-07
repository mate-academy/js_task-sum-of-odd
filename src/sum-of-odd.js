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
  const lastOddNumber = row * (row + 1) - 1;
  let intermediateDigit = row + row - 1;
  let oddResult = lastOddNumber;

  if (row < 0) {
    return 0;
  }

  while (intermediateDigit > 0) {
    if ((lastOddNumber - intermediateDigit) % 2 !== 0) {
      oddResult += lastOddNumber - intermediateDigit;
    }
    intermediateDigit--;
  }

  return oddResult;
}

module.exports = rowSumOddNumbers;
