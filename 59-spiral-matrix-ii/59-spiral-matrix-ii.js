/**
 * @param {number} n
 * @return {number[][]}
 */

const dir = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const generateMatrix = function (n) {
  let [x, y] = [0, 0];
  let k = 1;
  let d = 0;
  const arr = Array.from(Array(n), () => Array(n).fill(0));
  while (k <= n ** 2) {
    arr[x][y] = k++;
    let [nx, ny] = [x + dir[d][0], y + dir[d][1]];
    if (nx < 0 || nx >= n || ny < 0 || ny >= n || arr[nx][ny] > 0) {
      d = (d + 1) % 4;
      [nx, ny] = [x + dir[d][0], y + dir[d][1]];
    }
    [x, y] = [nx, ny];
  }
  return arr;
};
