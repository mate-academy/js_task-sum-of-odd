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
  } else if (row === 1) {
    return 1;
  } else {
    let numRow = row;
    let amountNum = 0;

    for (let i = 1; i <= row; i++) {
      amountNum += numRow;
      numRow -= 1;
    }

    const arr = [1];
    let triangleNum = 1;

    for (let j = 1; j < amountNum; j++) {
      triangleNum += 2;
      arr.push(triangleNum);
    }

    const needNum = arr.slice(-row);

    return needNum.reduce(function(sum, current) {
      return sum + current;
    }, 0);
  }
}

module.exports = rowSumOddNumbers;
