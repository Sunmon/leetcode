/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
    nums = nums.sort((a,b) => a-b);
  const result = [[...nums]];
  while (nextPermutation(nums)) {
    result.push([...nums]);
  }

  return result;
};

const nextPermutation = function (nums) {
  let i = nums.length;
  while (--i > 0) {
    if (nums[i - 1] < nums[i]) break;
  }
  if (i === 0) return false;
  let j = nums.length;
  while (--j >= i) {
    if (nums[i - 1] < nums[j]) break;
  }

  [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];

  // reverse
  j = nums.length - 1;
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
  return true;
};
