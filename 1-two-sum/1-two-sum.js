/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const arr = nums.map((v, i) => [v, i]);
  arr.sort((a, b) => a[0] - b[0]);
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (arr[left][0] + arr[right][0] === target) {
      break;
    } else if (arr[left][0] + arr[right][0] > target) {
      right -= 1;
    } else {
      left += 1;
    }
  }
  return [arr[left][1], arr[right][1]];
};
