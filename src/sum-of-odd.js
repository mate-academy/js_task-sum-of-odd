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

  let numbersOfRow = [];
  const arrayOfRows = [];
  let maxIndexOfRowArray = 1;
  let number = 1;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < maxIndexOfRowArray; j++) {
      numbersOfRow.push(number);
      number += 2;
    }
    maxIndexOfRowArray++;
    arrayOfRows.push(numbersOfRow);
    numbersOfRow = [];
  }

  let summ = 0;

  for (let i = 0; i < arrayOfRows[row - 1].length; i++) {
    summ += arrayOfRows[row - 1][i];
  }
  return summ;
}

module.exports = rowSumOddNumbers;
