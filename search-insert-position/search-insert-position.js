/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
 return search(0, nums.length-1, nums,target)   
};


var search = function(begin, end, nums, target) {
  const mid = Math.floor((begin+end)/2);
  if (nums[mid]===target) return mid;
  if (begin >= end) return nums[mid] > target ? mid : mid +1;
  
  if (nums[mid] > target) {
    return search(begin, mid-1, nums, target);
  } else {
    return search(mid+1, end, nums, target);
  }
}