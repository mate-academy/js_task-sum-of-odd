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
 *           31
 *          43
 *         57 59 61 63 65 67 69 71
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
  // eslint-disable-next-line no-param-reassign
  row > 0 ? row *= row * row : row = 0;

  return row;
}

module.exports = rowSumOddNumbers;
