/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  const answer = [];
  for (let row = 1; row <= numRows; row++) {
    const line = [];
    for (let col = 0; col < row; col++) {
      if (col === 0 || col === row - 1) {
        line.push(1);
      } else {
        line.push(answer[row - 2][col - 1] + answer[row - 2][col]);
      }
    }
    answer.push(line);
  }

  return answer;
};