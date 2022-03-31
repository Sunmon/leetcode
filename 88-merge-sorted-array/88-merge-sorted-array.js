/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  const arr = Array(m + n);
  let i = 0;
  let j = 0;
  let ptr = 0;
  while (ptr < arr.length) {
    if (m > 0 && n > 0) {
      if (nums1[i] >= nums2[j]) {
        arr[ptr++] = nums2[j];
        j += 1;
        n -= 1;
      } else {
        arr[ptr++] = nums1[i];
        i += 1;
        m -= 1;
      }
    } else if (m > 0) {
      arr[ptr++] = nums1[i];
      i += 1;
      m -= 1;
    } else {
      arr[ptr++] = nums2[j];
      j += 1;
      n -= 1;
    }
  }
  nums1.splice(0, arr.length, ...arr);
};
