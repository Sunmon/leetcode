/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  return binarySearch(nums, target, 0, nums.length);
};

// search nums [begin, end) and returns index
const binarySearch = function (nums, target, begin, end) {
  if (begin >= end) return -1;
  const middle = parseInt((begin + end) / 2, 10);
  if (nums[middle] === target) return middle;
  if (nums[middle] < target) return binarySearch(nums, target, middle + 1, end);
  return binarySearch(nums, target, begin, middle);
};
