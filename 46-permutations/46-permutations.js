/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let result = [];
const permute = function (nums) {
  result = [];
  permutation(nums, 0);
  return result;
};

// select i'th number and save permutation
function permutation(nums, i) {
  if (i === nums.length - 1) {
    result.push([...nums]);
    return;
  }

  for (let j = i; j < nums.length; j++) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    permutation(nums, i + 1);
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
}
