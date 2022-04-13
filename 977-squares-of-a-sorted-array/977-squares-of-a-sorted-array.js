/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  return nums.map(n => n ** 2).sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
};
