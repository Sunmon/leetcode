/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  for (let p = 0, i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // swap
      const temp = nums[i];
      nums[i] = nums[p];
      nums[p++] = temp;
    }
  }
};
