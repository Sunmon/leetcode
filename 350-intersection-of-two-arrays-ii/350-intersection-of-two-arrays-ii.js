/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  const m = new Map();
  for (let i = 0; i < nums1.length; i++) {
    m.set(nums1[i], (m.get(nums1[i]) ?? 0) + 1);
  }

  const result = [];
  for (let i = 0; i < nums2.length; i++) {
    if ((m.get(nums2[i]) ?? 0) > 0) {
      m.set(nums2[i], m.get(nums2[i]) - 1);
      result.push(nums2[i]);
    }
  }

  return result;
};
