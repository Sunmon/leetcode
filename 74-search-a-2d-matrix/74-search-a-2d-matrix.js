/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  let row = matrix.length;
  while (--row >= 0) {
    if (matrix[row][0] <= target) break;
  }
  if (row < 0) return false;
  for (let i = 0; i < matrix[row].length; i++) {
    if (target === matrix[row][i]) return true;
  }
  return false;
};
