/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  const m = matrix.length;
  if (m === 0) return false;
  const n = matrix[0].length;

  // binary search
  let left = 0;
  let right = m * n - 1;
  let pivot;
  let value;
  while (left <= right) {
    pivot = parseInt((left + right) / 2);
    value = matrix[parseInt(pivot / n)][pivot % n];
    if (target === value) return true;
    if (target > value) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }
  return false;
};
