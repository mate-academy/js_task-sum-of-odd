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
  const numbersAmount = numbersAmounFunc(row);
  const numbersOddArr = [];
  let sumOddRow = 0;

  for (let i = 0; i <= numbersAmount * 2; i++) {
    if (i % 2 !== 0) {
      numbersOddArr.push(i);
    }
  }

  const numbersOddRow = numbersOddArr.slice(-row);

  for (let j = 0; j < numbersOddRow.length; j++) {
    sumOddRow += numbersOddRow[j];
  }

  return sumOddRow;

  function numbersAmounFunc(count) {
    return (count) > 1 ? count + numbersAmounFunc(count - 1) : 1;
  };
}

module.exports = rowSumOddNumbers;
