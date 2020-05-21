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
  let sumOfRow = 0;
  const rowStartNumber = row * (row - 1) + 1;
  const nextStep = row + 1;
  const rowStartNumberStep = nextStep * (nextStep - 1) + 1;
  const rowEndNumber = rowStartNumberStep - 2;

  for (let i = rowStartNumber; i <= rowEndNumber; i += 2) {
    sumOfRow += i;
  }

  return sumOfRow;
}

module.exports = rowSumOddNumbers;
