/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
  const answer = [];
  let i = 0;
  while (i++ <= rowIndex) {
    answer.push(1);
    for (let j = i-2; j > 0; j--) answer[j] += answer[j - 1];
      
  }
  return answer;
};
