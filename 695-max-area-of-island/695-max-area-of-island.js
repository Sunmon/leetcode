/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function (grid) {
  const [m, n] = [grid.length, grid[0].length];
  const visited = Array.from(Array(m), () => Array(n).fill(false));

  let answer = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && grid[i][j] === 1) {
        visited[i][j] = true;
        const area = dfs(i, j, m, n, grid, visited);
        answer = Math.max(answer, area);
      }
    }
  }

  return answer;
};

const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const dfs = function (x, y, m, n, grid, visited) {
  let area = 1;
  for (let i = 0; i < dir.length; i++) {
    const [nx, ny] = [x + dir[i][0], y + dir[i][1]];
    if (nx >= m || nx < 0) continue;
    if (ny >= n || ny < 0) continue;
    if (grid[nx][ny] === 0) continue;
    if (visited[nx][ny]) continue;
    visited[nx][ny] = true;
    area += dfs(nx, ny, m, n, grid, visited);
  }
  return area;
};
