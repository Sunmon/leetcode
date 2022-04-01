/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  const answer = [[1]];
  for (let i = 1; i < numRows; i++) {
    const temp = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        temp.push(1);
      } else {
        temp.push(answer[i - 1][j] + answer[i - 1][j - 1]);
      }
    }
    answer.push(temp);
  }
  return answer;
};

