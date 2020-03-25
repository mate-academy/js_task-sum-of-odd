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
  const arr = [];
  let x = 1;
  let sum = 0;

  if (row < 0) {
    return 0;
  }

  for (let i = 0; i < ((row * (row + 1)) / 2); i++) {
    arr.push(x);
    x += 2;
  }

  arr.splice(0, ((row - 1) * row) / 2);

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

module.exports = rowSumOddNumbers;
