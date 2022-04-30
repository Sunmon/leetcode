/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = function (nums) {
  const duplicates = new Set();
  const answer = new Set();
  let seen = new Set();
  for (let pivot = 0; pivot < nums.length; pivot++) {
    if (duplicates.has(pivot)) continue;
    seen = new Set();
    for (let i = pivot + 1; i < nums.length; i++) {
      const sum = nums[pivot] + nums[i];
      if (seen.has(-sum)) {
        // NOTE: in js, [1,2,3] !== [1,2,3]
        const result = [nums[pivot], nums[i], -sum].sort((a, b) => a - b);
        answer.add(JSON.stringify(result));
      }
      seen.add(nums[i]);
    }
    duplicates.add(pivot);
  }
  return [...answer.values()].map(i => JSON.parse(i));
};