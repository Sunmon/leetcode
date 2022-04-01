/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function (mat, r, c) {
  if (mat.length * mat[0].length !== r * c) return mat;
  const result = Array.from(Array(r), () => Array(c));
  let k = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      result[parseInt(k / c)][k % c] = mat[i][j];
      k++;
    }
  }

  return result;
};
