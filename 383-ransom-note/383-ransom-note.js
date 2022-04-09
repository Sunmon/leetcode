/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  ransomNote = [...ransomNote].sort((a, b) => a.localeCompare(b));
  magazine = [...magazine].sort((a, b) => a.localeCompare(b));
  let i = 0;
  let j = 0;
  const [n, m] = [ransomNote.length, magazine.length];
  while (i < n && j < m) {
    if (ransomNote[i] === magazine[j]) {
      ++i;
      ++j;
    } else if (ransomNote[i] > magazine[j]) {
      ++j;
    } else {
      return false;
    }
  }

  return i === n;
};
