/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
  let counter = 0;
  while (n > 0 && counter < 2) {
    if ((1 & n) !== 0) counter++;
    n >>= 1;
  }

  return counter === 1;
};
