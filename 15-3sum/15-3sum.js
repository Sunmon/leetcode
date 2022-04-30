/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  const answer = [];
  for (let pivot = 0; pivot < nums.length; pivot++) {
    if (pivot === 0 || nums[pivot - 1] !== nums[pivot]) {
      twoSum(pivot, nums, answer);
    }
  }
  return answer;
};

const twoSum = function (pivot, nums, answer) {
  const seen = new Set();
  for (let i = pivot + 1; i < nums.length; i++) {
    const sum = nums[pivot] + nums[i];
    if (seen.has(-sum)) {
      answer.push([nums[pivot], nums[i], -sum]);
      while (nums[i] === nums[i + 1]) i++;
    } else {
      seen.add(nums[i]);
      // while (nums[i] === nums[i + 1]) i++;
      // 여기 넣으면 연속된 숫자가 있을때, 기껏 seen에 넣은 nums[i]를 이용하지 않음
    }
  }
};