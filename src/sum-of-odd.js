'use strict';

function rowSumOddNumbers(row) {
  // 1|1
  // 2|8
  // 3|27
  // 4|64
  // 5|125 => E = n**3
  return (row > 0) ? row ** 3 : 0;
}

module.exports = rowSumOddNumbers;
