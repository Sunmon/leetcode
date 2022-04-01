/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function (mat, r, c) {
  if (mat.length * mat[0].length !== r * c) return mat;
  const queue = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      queue.push(mat[i][j]);
    }
  }

  const result = Array.from(Array(r), () => Array(c));
  let k = 0;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      result[i][j] = queue[k++];
    }
  }
  return result;
};
