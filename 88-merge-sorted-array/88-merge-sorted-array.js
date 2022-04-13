/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  let [i, j] = [m - 1, n - 1];
  for (let k = m + n - 1; k >= 0; k--) {
    if (i < 0 || nums1[i] <= nums2[j]) {
      nums1[k] = nums2[j--];
    } else if (j < 0 || nums2[j] < nums1[i]) {
      nums1[k] = nums1[i--];
    }
  }
};
