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
  let result = 0;
  const initial = 1;
  const oddExtender = 2;
  let lastIndex = 0;
  let lastNum = 0;
  // let's get last index of a number in a given row

  for (let i = 0; i <= row; i++) {
    lastIndex += i;
  }
  // let's count the last Number in given row
  lastNum = (oddExtender * lastIndex) - initial;

  for (let i = 0; i < row; i++) {
    result += lastNum - (2 * i);
  }

  return result;
}

module.exports = rowSumOddNumbers;
