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
  if (row > 0) {
    let firstRowElem = 1;
    let coef = 0;

    for (let i = 0; i < row; i++) {
      const curentCoef = coef;
      coef++;
      firstRowElem += 2 * curentCoef;
    }

    let sum = firstRowElem;

    for (let j = 1; j < row; j++) {
      firstRowElem += 2;
      sum += firstRowElem;
    }

    return sum;
  }

  return 0;
}
module.exports = rowSumOddNumbers;
