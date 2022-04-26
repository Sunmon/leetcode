/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const s = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (s.has(nums[i])) {
      s.delete(nums[i]);
    } else {
      s.add(nums[i]);
    }
  }

  return [...s.values()][0];
};
