/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
  let result = 0;
  s = s.split('').sort();
  let counter = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      result += parseInt(counter / 2) * 2;
      counter = 1;
    } else {
      counter++;
    }
  }
  result += parseInt(counter / 2) * 2;
  if (result < s.length) result++;
  return result;
};
