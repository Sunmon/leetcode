/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let answer = -98764321;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    answer = Math.max(answer, sum);
  }

  return answer;
};
