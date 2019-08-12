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
  } else {
    const firstNum = row * (row - 1) + 1;
    let countRow = row - 1;
    let countNumber = firstNum;
    let result = firstNum;
    while (countRow > 0) {
      countNumber += 2;
      result += countNumber;
      countRow--;
    }
    return result;
  }
}

module.exports = rowSumOddNumbers;
