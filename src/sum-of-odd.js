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
  if (row <= 0) {
    return 0;
  }
  function quantityNum(num) {
    return num ? num + quantityNum(num - 1) : 1;
  }
  let count = quantityNum(row);
  const oddMassive = [];
  for (let i = 1; i < count; i++) {
    if (i % 2 !== 0) {
      oddMassive.push(i);
    } else {
      count++;
    }
  }
  const oddSum = oddMassive.slice(-row);
  return oddSum.reduce((sum, current) => sum + current, 0);
}

module.exports = rowSumOddNumbers;
