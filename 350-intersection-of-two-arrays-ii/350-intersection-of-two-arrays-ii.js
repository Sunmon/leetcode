/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  if (nums1.length < nums2.length) return intersect(nums2, nums1);
  const m = new Map();
  for (let i = 0; i < nums1.length; i++) {
    m.set(nums1[i], m.get(nums1[i]) + 1 || 1);
  }

  let k = 0;
  for (let i = 0; i < nums2.length; i++) {
    if (m.get(nums2[i]) > 0) {
      m.set(nums2[i], m.get(nums2[i]) - 1);
      nums1[k++] = nums2[i];
    }
  }

  return nums1.slice(0, k);
};
