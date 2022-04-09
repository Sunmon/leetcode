/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  const queue = Array(26).fill(0);
  for (let i = 0; i < magazine.length; i++) {
    queue[magazine.charCodeAt(i) - 97] += 1;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    const pivot = ransomNote.charCodeAt(i) - 97;
    queue[pivot] -= 1;
    if (queue[pivot] < 0) return false;
  }

  return true;
};