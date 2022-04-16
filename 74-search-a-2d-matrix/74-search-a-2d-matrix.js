/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  const [m, n] = [matrix.length, matrix[0].length];
  let begin = 0;
  let end = m * n;
  while (begin < end) {
    const p = parseInt((begin + end) / 2);
    const [i, j] = [parseInt(p / n), p % n];

    if (matrix[i][j] === target) return true;
    if (matrix[i][j] > target) {
      end = p;
    } else {
      begin = p + 1;
    }
  }

  return false;
};
