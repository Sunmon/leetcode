/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    sorting(nums);
};

const sorting = function(nums) {
    let left = 0; let right = nums.length-1;
    while(left < nums.length && nums[left]===0) left++;
    while(right >= 0 && nums[right]===2) right--;
    
    let i = left;
    while(i <= right) {
       if (nums[i] === 2) {
            [nums[i],nums[right]] = [nums[right], nums[i]];
            right --;
        } else if (nums[i] === 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
            i++;
        } else {
            i++;
        }
    }
   
}