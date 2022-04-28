/**
 * @param {character[][]} grid
 * @return {number}
 */

let parent = [];
let rank = [];
let count = 0;
const dir = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
const numIslands = function (grid) {
  const [m, n] = [grid.length, grid[0].length];
  count = 0;
  parent = [...Array(m * n)].map((v, i) => {
    if (grid[parseInt(i / n)][i % n] === '1') ++count;
    return i;
  });
  rank = Array(m * n).fill(1);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        for (let k = 0; k < 4; k++) {
          const [nx, ny] = [i + dir[k][0], j + dir[k][1]];
          if (grid[nx]?.[ny] === '1') union(i * n + j, nx * n + ny);
        }
      }
    }
  }

  return count;
};

const find = function (u) {
  if (parent[u] !== u) parent[u] = find(parent[u]);
  return parent[u];
};

// return new set's root
const union = function (x, y) {
  const [u, v] = [find(x), find(y)];
  if (parent[u] !== parent[v]) {
    if (rank[u] < rank[v]) return union(y, x);
    if (rank[u] === rank[v]) rank[u]++;
    parent[v] = u;
    --count;
  }

  return u;
};
