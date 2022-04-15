/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  let cur = 0;
  const len = nums.length;
  let counter = 0;
  while (counter < len) {
    const begin = cur;
    let cache = nums[begin];
    while (true) {
      const next = (k + cur) % len;
      const temp = nums[next];
      nums[next] = cache;
      cur = next;
      counter++;
      cache = temp;
      if (cur === begin) break;
    }
    cur++;
  }

  return nums;
};
