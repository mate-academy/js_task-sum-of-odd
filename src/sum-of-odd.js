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
  const sumInRow = [];
  let iter = 1;
  let j = 1;
  let numberInRow = 1;

  sumInRow[0] = 3;

  if (row < 0) { return 0; }

  for (let i = 0; i < row; i++) {
    sumInRow[i] = 0;
    while (j > 0) {
      if (numberInRow === 1) {
        sumInRow[i] = 1;
      } else {
        sumInRow[i] = sumInRow[i] + numberInRow;
      } numberInRow += 2;
      j--;
    }
    iter++;
    j = iter;
  }

  return sumInRow[row - 1];
}

module.exports = rowSumOddNumbers;
