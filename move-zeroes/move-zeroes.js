/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let pivot = 0;
  for(let i = 0; i<nums.length; i++){
    if (nums[i]) {
      nums[pivot++] = nums[i];
    }
  }
  
  for(let i = pivot; i<nums.length; i++){
    nums[i] = 0;
  }
  
  return nums;
};