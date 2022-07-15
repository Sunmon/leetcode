/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const m = new Map();
  let longest = 0;
  let left = 0;
  for(let i = 0; i<s.length; i++) {
    if (m.has(s[i])) {
      left = Math.max(left, m.get(s[i]) + 1);
    }
    longest = Math.max(longest, i - left + 1);
    m.set(s[i], i);
  }
  
  return longest;
};