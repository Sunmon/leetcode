/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const LEN = 9;
  const rows = Array.from(Array(LEN), () => Array(LEN).fill(false));
  const cols = Array.from(Array(LEN), () => Array(LEN).fill(false));
  const blocks = Array.from(Array(LEN), () => Array(LEN).fill(false));

  for (let i = 0; i < LEN; i++) {
    for (let j = 0; j < LEN; j++) {
      const val = board[i][j];
      if (val === '.') continue;
      if (rows[i][+val]) return false;
      if (cols[j][+val]) return false;
      if (blocks[parseInt(i / 3) * 3 + parseInt(j / 3)][+val]) return false;
      rows[i][+val] = true;
      cols[j][+val] = true;
      blocks[parseInt(i / 3) * 3 + parseInt(j / 3)][+val] = true;
    }
  }

  return true;
};
