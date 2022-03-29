/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  return nums.some(num => nums.filter(n => n === num).length !== 1);
};