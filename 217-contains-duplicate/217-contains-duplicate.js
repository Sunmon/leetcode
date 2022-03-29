const containsDuplicate = function (nums) {
  const _set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (_set.has(nums[i])) return true;
    _set.add(nums[i]);
  }
  return false;
};