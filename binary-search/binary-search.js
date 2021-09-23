/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Time: 80 ms (69.52%), Space: 42.3 MB (37.27%) - LeetHub
 */
var search = function(nums, target) {
    return nums.findIndex(el => el === target)
};

/**
 * Time: 76 ms (83.08%), Space: 42.3 MB (37.27%)
 */
var search = function(nums, target) {
  let [begin, end] = [0, nums.length-1];
  while(begin <= end) {
    const i = ((begin+end) / 2)|0;
    if (target === nums[i]) return i;
    target > nums[i]? begin = i+1 : end = i-1;
  }
  
  return -1;
};
