/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
  const queue = [];
  let counter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        counter++;
      }
    }
  }

  const dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  let p = 0;
  let phase = queue.length;
  let time = 0;
  while (p < queue.length) {
    if (p === phase) {
      time++;
      phase = queue.length;
    }
    const [x, y] = queue[p++];
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dir[i][0], y + dir[i][1]];
      if (grid[nx]?.[ny] === 1) {
        grid[nx][ny] = 2;
        queue.push([nx, ny]);
        counter--;
      }
    }
  }

  return counter === 0 ? time : -1;
};