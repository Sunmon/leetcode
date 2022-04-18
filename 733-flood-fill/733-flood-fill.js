/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = function (image, sr, sc, newColor) {
  const [m, n] = [image.length, image[0].length];
  const visited = Array.from(Array(m), () => Array(n).fill(false));
  const q = [];
  const color = image[sr][sc];
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  q.push([sr, sc]);
  while (q.length) {
    const [x, y] = q.pop();
    image[x][y] = newColor;
    for (let k = 0; k < 4; k++) {
      const [nx, ny] = [x + dir[k][0], y + dir[k][1]];
      if (nx >= m || nx < 0) continue;
      if (ny >= n || ny < 0) continue;
      if (visited[nx][ny]) continue;
      if (image[nx][ny] !== color) continue;
      visited[nx][ny] = true;
      q.push([nx, ny]);
    }
  }

  return image;
};
