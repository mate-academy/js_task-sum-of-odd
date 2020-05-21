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

  let currenRow = 0;
  let num = -1;
  const currenRowArr = [];

  for (let i = 0; i < row; i++) {
    currenRow++;

    for (let j = 0; j < currenRow; j++) {
      num += 2;
      currenRowArr[j] = num;
    }
  }

  return currenRowArr.reduce((a, b) => a + b);
}

module.exports = rowSumOddNumbers;
