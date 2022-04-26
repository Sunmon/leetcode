/**
 * @param {character[][]} grid
 * @return {number}
 */

let visited = [[]];
let m;
let n = 0;
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const numIslands = function (grid) {
  m = grid.length;
  n = grid[0].length;
  visited = Array.from(Array(m), () => Array(n).fill(false));

  let counter = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && grid[i][j] === '1') {
        visited[i][j] = true;
        dfs(i, j, grid);
        counter++;
      }
    }
  }
  return counter;
};

const dfs = function (x, y, grid) {
  for (let i = 0; i < dir.length; i++) {
    const [nx, ny] = [x + dir[i][0], y + dir[i][1]];
    if (visited[nx]?.[ny] !== false) continue;
    if (grid[nx]?.[ny] !== '1') continue;
    visited[nx][ny] = true;
    dfs(nx, ny, grid);
  }
};
