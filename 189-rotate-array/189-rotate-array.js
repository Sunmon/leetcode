/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  const len = nums.length;
  k %= len;
  const copied = [...nums];
  let [i, j] = [k, 0];
  while (true) {
    nums[i++] = copied[j++];
    if (i === len) i = 0;
    if (j === len) break;
  }
};

