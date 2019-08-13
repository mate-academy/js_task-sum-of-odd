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
 *
//formula == 1 + row * (row -1) - first number in row
//formula == 1 + row * (row -1) + 2 - next number in row
//formula == 1 + row * (row -1) + 4 - next number in row
//....
//formula == 1 + row * (row -1) + 2 * row - last number in row
*/

function rowSumOddNumbers(row) {
  let summNumberInRow = 0;

  for (let i = 0; i < row; i++) {
    summNumberInRow = summNumberInRow + (1 + row * (row - 1)) + 2 * i;
  }

  return summNumberInRow;
}

// при подсчете было получено вот такое решение: summ = row * row * row
// второй способ решения
module.exports = rowSumOddNumbers;
