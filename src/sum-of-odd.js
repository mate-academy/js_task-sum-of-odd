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
  let position = 0;
  let result = 0;
  for (let x = row - 1; x > 0; x--) {
    position = position + x; //  At first we need to find starting index
  } // In our case it will be summ of all prev numbers + 1
  for (let i = 0; i < row; i++) { //  Using loop we foud the summ of all numbers
    result = result + 2 * (position + 1 + i) - 1;
  }

  return result;

  // write code here
}

module.exports = rowSumOddNumbers;
