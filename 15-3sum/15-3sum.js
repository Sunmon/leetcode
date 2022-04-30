/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  const answer = [];
  for (let pivot = 0; pivot < nums.length; pivot++) {
    if (pivot === 0 || nums[pivot - 1] !== nums[pivot]) {
      twoSumII(pivot, nums, answer);
    }
  }
  return answer;
};

const twoSumII = function (pivot, nums, answer) {
  let left = pivot + 1;
  let right = nums.length - 1;
  while (left < right) {
    const sum = nums[pivot] + nums[left] + nums[right];
    if (sum === 0) {
      answer.push([nums[pivot], nums[left++], nums[right--]]);
      while (left < right && nums[left] === nums[left - 1]) {
        ++left;
      }
    } else if (sum > 0) {
      --right;
    } else {
      ++left;
    }
  }
};