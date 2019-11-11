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
  if (row < 1) {
    return 0;
  }

  let sumPrev = 0;

  for (let i = row - 1; i > 0; i--) {
    sumPrev += i;
  }

  let element = sumPrev * 2 + 1;
  let res = element;

  for (let i = 1; i < row; i++) {
    element += 2;
    res += element;
  }

  return res;
}

module.exports = rowSumOddNumbers;
