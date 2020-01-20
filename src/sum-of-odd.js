'use strict';

/**
 *  fs_on_dec19_salogubova
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
  let startElemOfLastRow = 1;
  let lastElementOfLastRow = null;

  if (row <= 0) {
    return 0;
  }

  for (let i = 0; i <= row; i++) {
    startElemOfLastRow = i * i - (i - 1);
    lastElementOfLastRow = startElemOfLastRow + (row - 1) * 2;
  }

  return (startElemOfLastRow + lastElementOfLastRow) * row / 2;
}
module.exports = rowSumOddNumbers;
