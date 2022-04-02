/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const rows = Array.from(Array(9), () => new Set());
  const cols = Array.from(Array(9), () => new Set());
  const cells = Array.from(Array(9), () => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (isNaN(board[i][j])) continue;
      const num = +board[i][j] - 1;
      if (rows[i].has(num)) return false;
      if (cols[j].has(num)) return false;
      if (cells[parseInt(i / 3) * 3 + parseInt(j / 3)].has(num)) return false;
      rows[i].add(num);
      cols[j].add(num);
      cells[parseInt(i / 3) * 3 + parseInt(j / 3)].add(num);
    }
  }

  return true;
};
