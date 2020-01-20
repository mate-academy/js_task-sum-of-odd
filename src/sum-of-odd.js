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

  let firstNumber = 1;
  let count = 2;

  for (let i = 0; i < row - 1; i++) {
    firstNumber = firstNumber + count;
    count = count + 2;
  }

  let oddNumbers = firstNumber;
  let sumOdd = firstNumber;

  for (let i = 0; i < row - 1; i++) {
    oddNumbers = oddNumbers + 2;
    sumOdd = sumOdd + oddNumbers;
  }

  return sumOdd;
}

module.exports = rowSumOddNumbers;
