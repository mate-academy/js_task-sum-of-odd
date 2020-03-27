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

/* Here is the evidence that a row in this triangle
is equal to number of row raised to third power
https://www.themathpage.com/Arith/cubes.htm */

function rowSumOddNumbers(row) {
  return row <= 0 ? 0 : Math.pow(row, 3);
}

module.exports = rowSumOddNumbers;
