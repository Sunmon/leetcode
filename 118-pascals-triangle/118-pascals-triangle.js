/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  const answer = [];
  let temp = [];
  for (let i = 0; i <= numRows; i++) {
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        temp.push(1);
      } else {
        temp.push(answer[i - 1][j - 1] + answer[i - 1][j]);
      }
    }
    answer.push(temp);
    temp = [];
  }
  answer.shift();
  return answer;
};
