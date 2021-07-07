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
  }
  const rows = [];
  rows.push([1]);
  for (let i = 2; i <= row; i++) {
    const rowNumbers = [];
    for (let j = 0; j < i; j++) {
      if (rowNumbers.length === 0) {
        rowNumbers.push(rows[rows.length - 1][rows.length - 1] + 2);
      } else {
        rowNumbers.push(rowNumbers[rowNumbers.length - 1] + 2);
      }
    }
    rows.push(rowNumbers);
  }
  const rowSum = rows[row - 1].reduce((sum, elenent) => sum + elenent);
  return rowSum;
}

module.exports = rowSumOddNumbers;
