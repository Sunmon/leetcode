/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const cache = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (cache.has(target - nums[i])) {
      return [cache.get(target - nums[i]), i];
    }
    cache.set(nums[i], i);
  }

  return [-1, -1];
};
