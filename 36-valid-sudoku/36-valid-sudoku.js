const isValidSudoku = function (board) {
  const rows = Array.from(Array(9), () => new Set());
  const cols = Array.from(Array(9), () => new Set());
  const cells = Array.from(Array(9), () => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') continue;
      const num = +board[i][j] - 1;
        const sector = parseInt(i/3) * 3 + parseInt(j/3);
      if (rows[i].has(num)) return false;
      if (cols[j].has(num)) return false;
      if (cells[sector].has(num)) return false;
      rows[i].add(num);
      cols[j].add(num);
      cells[sector].add(num);
    }
  }

  return true;
};