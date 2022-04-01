/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function (mat, r, c) {
  if (mat.length * mat[0].length != r * c) {
    return mat;
  }

  const flatten = mat.reduce((prev, cur) => {
    prev.push(...cur);
    return prev;
  }, []);

  const answer = [];
  let temp = [];
  for (let i = 0; i < flatten.length; i++) {
    if (i > 0 && i % c === 0) {
      answer.push(temp);
      temp = [];
    }
    temp.push(flatten[i]);
      
  }
  answer.push(temp);
  return answer;
};
