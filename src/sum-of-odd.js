'use strict';

/**
 * Implement sumOfOdd function:
 * Given the triangle of consecutive odd numbers:
 * Calculate the sum of all numbers in a row of the triangle
 * Row index (starting at index 1) e.g.:
 * rowSumOddNumbers(1); // 1
 * rowSumOddNumbers(2); // 3 + 5 = 8
 * rowSumOddNumbers(-1); // 0
 * @param {number} row
 * @return {number}
 */
function rowSumOddNumbers(row) {
  return row > 0 ? row ** 3 : 0;
}

module.exports = rowSumOddNumbers;
