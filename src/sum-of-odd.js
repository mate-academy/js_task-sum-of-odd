'use strict';

function rowSumOddNumbers(row) {
  let rowSum = 0;
  const rowStart = row * (row - 1) + 1;

  for (let i = 0; i < row; i++) {
    rowSum += rowStart + (2 * i);
  }

  return rowSum;
}

module.exports = rowSumOddNumbers;
