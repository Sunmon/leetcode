/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const rows = Array.from(Array(9), () => Array(9).fill(false));
  const cols = Array.from(Array(9), () => Array(9).fill(false));
  const cells = Array.from(Array(9), () => Array(9).fill(false));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (isNaN(num)) continue;
      if (rows[i][+num - 1]) return false;
      if (cols[j][+num - 1]) return false;
      if (cells[parseInt(i / 3) * 3 + parseInt(j / 3)][+num - 1]) return false;
      rows[i][+num - 1] = true;
      cols[j][+num - 1] = true;
      cells[parseInt(i / 3) * 3 + parseInt(j / 3)][+num - 1] = true;
    }
  }

  return true;
};
