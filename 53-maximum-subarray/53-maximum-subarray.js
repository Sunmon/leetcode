/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  return getMaxSub(nums, 0, nums.length);
};

const getMaxSub = function (nums, begin, end) {
  if (begin >= end) {
    return -987654321;
  }
  const half = Math.floor((begin + end) / 2);

  let leftMid = 0;
  let rightMid = 0;
  let tempSum = 0;
  for (let i = half - 1; i >= begin; i--) {
    tempSum += nums[i];
    leftMid = Math.max(tempSum, leftMid);
  }

  tempSum = 0;
  for (let i = half + 1; i < end; i++) {
    tempSum += nums[i];
    rightMid = Math.max(tempSum, rightMid);
  }

  const mid = leftMid + nums[half] + rightMid;
  const left = getMaxSub(nums, begin, half);
  const right = getMaxSub(nums, half + 1, end);

  return Math.max(...[mid, left, right]);
};