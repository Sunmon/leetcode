/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function (mat, r, c) {
  if (mat.length * mat[0].length !== r * c) {
    return mat;
  }

  const result = [];
  let temp = [];
  let k = 0;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (k > 0 && k % c === 0) {
        result.push(temp);
        temp = [];
      }
      temp.push(mat[i][j]);
      k++;
    }
  }
  result.push(temp);
  return result;
};