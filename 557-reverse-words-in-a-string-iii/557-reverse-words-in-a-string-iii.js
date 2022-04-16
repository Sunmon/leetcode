/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  const arr = s.split(' ').map(i => i.split('').reverse().join(''));
  return arr.join(' ');
};
