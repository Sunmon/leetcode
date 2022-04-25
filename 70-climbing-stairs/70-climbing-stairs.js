/**
 * @param {number} n
 * @return {number}
 */

const cache = Array(46).fill(-1);
const climbStairs = function (n) {
  if (cache[n] > -1) return cache[n];
  if (n <= 0) return n === 0;
  cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return cache[n];
};
