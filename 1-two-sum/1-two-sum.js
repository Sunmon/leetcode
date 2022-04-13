/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const s = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (s.has(target - nums[i])) {
      return [i, s.get(target - nums[i])];
    }
    s.set(nums[i], i);
  }
  return [];
};
