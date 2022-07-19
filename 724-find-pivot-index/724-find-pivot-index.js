/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let sum = nums.reduce((prev, cur) => prev + cur);
  let subSum = 0;
  for(let i = 0 ;i<nums.length; i++) {
    if (sum - subSum - nums[i] === subSum) return i;
    subSum += nums[i];
  }
  return -1;
};