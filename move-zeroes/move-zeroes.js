/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let left = 0, right = 0;
  while(right < nums.length) {
    if (nums[right]!==0){
      const temp = nums[right];
      nums[right++] = nums[left];
      nums[left++] = temp;
    } else {
      right ++;
    }
  }
  
  return nums;
};