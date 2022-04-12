/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  let [begin, end] = [0, nums.length - 1];
  while (begin <= end) {
    const middle = begin + parseInt((end - begin) / 2);
    if (nums[middle] === target) return middle;
    if (nums[middle] > target) {
      end = middle - 1;
    } else {
      begin = middle + 1;
    }
  }
  return begin;
};
