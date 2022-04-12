/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  return binarySearch(nums, target, 0, nums.length);
};

// search nums[begin,end)
const binarySearch = function (nums, target, begin, end) {
  if (begin >= end) {
    return begin;
  }
  const middle = parseInt((begin + end) / 2, 10);
  if (nums[middle] === target) return middle;
  if (nums[middle] > target) {
    return binarySearch(nums, target, begin, middle);
  }
  return binarySearch(nums, target, middle + 1, end);
};
