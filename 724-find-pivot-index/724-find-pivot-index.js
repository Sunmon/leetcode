/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let sum = 0, leftSum = 0;
  sum = nums.reduce((prev, cur) => prev + cur);
  for(let i = 0; i<nums.length; i++){
    if (leftSum === sum - leftSum - nums[i]) return i;
    leftSum += nums[i];
  }
  return -1;
};