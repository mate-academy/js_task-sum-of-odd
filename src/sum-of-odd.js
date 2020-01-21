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
 */
function rowSumOddNumbers(row) {
  if (row !== Math.abs(row)) {
    return 0;
  }

  let num = 0;

  for (let i = 1; i < row; i++) {
    for (let j = 0; j < i; j++) {
      num += 2;
    }
  }

  let firstDigit = num - 1;
  const arr = [];

  for (let i = 0; i < row; i++) {
    firstDigit += 2;
    arr.push(firstDigit);
  }

  const result = arr.reduce((a, b) => {
    return a + b;
  });

  return result;
}
module.exports = rowSumOddNumbers;
