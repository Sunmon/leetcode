/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  const NUM = nums.length;
  const leftSum = Array(NUM).fill(0);
  const rightSum = Array(NUM).fill(0);
  for(let i = 0; i<NUM; i++) {
    leftSum[i] = (leftSum[i-1] ?? 0) + nums[i];
    rightSum[NUM - i - 1] = (rightSum[NUM-i]??0) + nums[NUM - i-1];
  }
  
  for(let i = 0; i<NUM; i++) {
    if ((leftSum[i-1]??0) === (rightSum[i+1]??0)) return i;
  }
  return -1;
};