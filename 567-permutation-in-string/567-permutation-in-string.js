 /**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
  const counter = Array(26).fill(0);
  const len = s1.length;
  for (let i = 0; i < s1.length; i++) {
    counter[s1.charCodeAt(i) - 97]++;
  }

  let prev = 0;
  const num = Array(26).fill(0);
  for (let i = 0; i < s2.length; i++) {
    const idx = s2.charCodeAt(i) - 97;
    num[idx]++;
    while (prev <= i && num[idx] > counter[idx]) {
      const n = s2.charCodeAt(prev) - 97;
      num[n]--;
      prev++;
    }
    if (len === i - prev + 1) return true;
  }

  return false;
};