/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let curSubArr = nums[0];
  let maxSubArr = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curSubArr = Math.max(nums[i], curSubArr + nums[i]);
    maxSubArr = Math.max(maxSubArr, curSubArr);
  }

  return maxSubArr;
};