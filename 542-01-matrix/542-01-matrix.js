/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function (mat) {
  const dist = Array.from(Array(mat.length), () =>
    Array(mat[0].length).fill(-1),
  );
  const queue = [];

  for (let i = 0; i < mat.length * mat[0].length; i++) {
    const x = parseInt(i / mat[0].length);
    const y = i % mat[0].length;
    if (mat[x][y] === 0) {
      queue.push([x, y]);
      dist[x][y] = 0;
    }
  }
  const dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let i = 0;
  while (i < queue.length) {
    const [x, y] = queue[i];
    for (let j = 0; j < 4; j++) {
      const [nx, ny] = [x + dir[j][0], y + dir[j][1]];
      if (dist[nx]?.[ny] === -1) {
        dist[nx][ny] = mat[nx][ny] === 0 ? 0 : 1 + dist[x][y];

        queue.push([nx, ny]);
      }
    }
    i++;
  }
  return dist;
};