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
  if (row < 0) { return 0; };
  const triangle = [[1]];

  for (let i = 1; i < row; i++) {
    const rowLine = [];
    rowLine.push(triangle[i - 1].slice(-1)[0] + 2);
    for (let a = 0; a < i; a++) {
      rowLine.push(rowLine.slice(-1)[0] + 2);
    };
    triangle.push(rowLine);
  };

  return triangle[row - 1].reduce((a, b) => { return a + b; });
}

module.exports = rowSumOddNumbers;
