/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const N = 9;
  const rows = Array(9);
  const cols = Array(9);
  const boxes = Array(9);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === '.') continue;
      const val = +board[i][j];
      const pos = 1 << (val - 1); // pos 번째 비트 확인용

      // 비트마스킹을 이용하여 숫자 중복 여부 확인
      if ((rows[i] & pos) > 0) return false;
      if ((cols[j] & pos) > 0) return false;
      if ((boxes[parseInt(i / 3) * 3 + parseInt(j / 3)] & pos) > 0)
        return false;

      rows[i] |= pos;
      cols[j] |= pos;
      boxes[parseInt(i / 3) * 3 + parseInt(j / 3)] |= pos;
    }
  }
  return true;
};
