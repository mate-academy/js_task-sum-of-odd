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
 */

function rowSumOddNumbers(row) {
  if (row !== Math.abs(row)) {
    return 0;
  }

  return Math.pow(row, 3);
}

module.exports = rowSumOddNumbers;
