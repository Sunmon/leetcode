/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  const m = matrix.length;
  const copied = matrix.map(v => [...v]);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      matrix[j][m - 1 - i] = copied[i][j];
    }
  }
};
