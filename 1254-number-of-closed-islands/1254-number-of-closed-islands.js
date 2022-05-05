/**
 * @param {number[][]} grid
 * @return {number}
 */

const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const closedIsland = function (grid) {
  const [m, n] = [grid.length, grid[0].length];
  const visited = Array.from(Array(m), () => Array(n).fill(false));

  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && grid[i][j] === 0 && dfs(i, j, m, n, visited, grid))
        ++result;
    }
  }

  return result;
};

const dfs = function (x, y, m, n, visited, grid) {
  visited[x][y] = true;
  let open = !(
    grid[x][y] === 0 &&
    (x === 0 || x === m - 1 || y === 0 || y === n - 1)
  );
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [dir[i][0] + x, dir[i][1] + y];
    if (grid[nx]?.[ny] === 0 && !visited[nx][ny]) {
      open = dfs(nx, ny, m, n, visited, grid) && open;
    }
  }

  return open;
};