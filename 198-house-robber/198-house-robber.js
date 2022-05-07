/**
 * @param {number[]} nums
 * @return {number}
 */

const rob = function (nums) {
  const cache = Array(nums.length + 3).fill(0); // cache[i] : maximum money when robbed i'th house
  for (let i = 0; i < nums.length; i++) {
    cache[i + 3] = nums[i] + Math.max(cache[i + 1], cache[i]);
  }

  return Math.max(cache[nums.length + 2], cache[nums.length + 1]);
};
