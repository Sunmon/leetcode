/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const index = Array(26).fill(-1);
  let answer = 0;
  let left = 0;
  let right = 0;
  for (right; right < s.length; right++) {
    const i = s.charCodeAt(right) - 97;
    if (index[i] >= left) {
      answer = Math.max(answer, right - left);
      left = index[i] + 1;
      index[i] = right;
    } else {
      index[i] = right;
    }
  }
  return Math.max(right - left, answer);
};
