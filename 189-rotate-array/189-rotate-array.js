/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  let arr = nums.reverse();
  arr = [...arr.slice(0, k % nums.length).reverse(), ...arr.slice(k % nums.length ).reverse()];
  for (let i = 0; i < nums.length; i++) {
    nums[i] = arr[i];
  }
};
