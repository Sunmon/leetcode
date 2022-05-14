/**
 * @param {string} moves
 * @return {boolean}
 */

const dir = {
  U: [-1, 0],
  R: [0, 1],
  D: [1, 0],
  L: [0, -1],
};
const judgeCircle = function (moves) {
  let x = 0;
  let y = 0;
  for (const move of moves) {
    [x, y] = [x + dir[move][0], y + dir[move][1]];
  }
  return x === 0 && y === 0;
};
