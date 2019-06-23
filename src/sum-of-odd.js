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

const sumirize = function(startNum, endNum) {
  return startNum < endNum
    ? endNum + sumirize(startNum, endNum - 2)
    : endNum;
};

function rowSumOddNumbers(row) {
  // write code here
  let result = 0;
  if (row < 0) {
    return result;
  }

  const minElem = Math.pow(row, 2) - (row - 1);
  const maxElem = minElem + (row - 1) * 2;
  result = sumirize(minElem, maxElem);

  return result;
}

module.exports = rowSumOddNumbers;
