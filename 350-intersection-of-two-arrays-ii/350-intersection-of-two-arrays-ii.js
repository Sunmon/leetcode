/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  const m1 = new Map();
  const m2 = new Map();
  for (let i = 0; i < nums1.length; i++) {
    if (m1.has(nums1[i])) {
      m1.set(nums1[i], m1.get(nums1[i]) + 1);
    } else {
      m1.set(nums1[i], 1);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (m2.has(nums2[i])) {
      m2.set(nums2[i], m2.get(nums2[i]) + 1);
    } else {
      m2.set(nums2[i], 1);
    }
  }

  const result = [];
  for (const [k, v] of m1) {
    if (m2.has(k)) {
      result.push(...Array(Math.min(v, m2.get(k))).fill(k));
    }
  }
  return result;
};
