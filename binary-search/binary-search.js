/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // return nums.findIndex(el => el === target)
  
  let [begin, end] = [0, nums.length-1];
  
  while(begin <= end) {
    const i = Number.parseInt((begin+end) / 2);
    if (target === nums[i]) return i;
    target > nums[i]? begin = i+1 : end = i-1;
  }
  
  return -1;
};