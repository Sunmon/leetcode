/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function (mat, r, c) {
  const x = mat.length;
  const y = mat[0].length;
  if (x * y !== r * c) return mat;
  const answer = Array.from(Array(r), () => Array(c));
  for (let p = 0; p < r*c; p++) {
    answer[parseInt(p / c)][p % c] = mat[parseInt(p / y)][p % y];
  }
  return answer;
};
