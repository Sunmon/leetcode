/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  const queue = Array(26).fill(0);
  for (let i = 0; i < t.length; i++) {
    queue[t.charCodeAt(i) - 97] += 1;
  }
  for (let i = 0; i < s.length; i++) {
    queue[s.charCodeAt(i) - 97] -= 1;
  }
  for (let i = 0; i < 26; i++) {
    if (queue[i] !== 0) return false;
  }
  return true;
};
