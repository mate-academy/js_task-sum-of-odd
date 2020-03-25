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
  } else {
    const arr = [];
    let i = 0;
    const num = (((row - 1) ** 2 + (row - 1)) / 2) + 1;
    let elem = 2 * num - 1;

    while (i < row) {
      arr.push(elem);
      elem += 2;
      i++;
    }

    return arr.reduce((sum, current) => sum + current, 0);
  }
}

module.exports = rowSumOddNumbers;
