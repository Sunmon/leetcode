/**
 * @param {number[][]} triangle
 * @return {number}
 */
let cache = [[]];
const minimumTotal = function (triangle) {
  let k = 0;
  cache = Array.from(Array(triangle.length), () => Array(++k).fill(Infinity));
  return move(0, 0, triangle);
};

const move = function (i, j, triangle) {
  if (j > i) return Infinity;
  if (i === triangle.length) return 0;
  if (cache[i][j] !== Infinity) return cache[i][j];
  cache[i][j] =
    triangle[i][j] +
    Math.min(move(i + 1, j, triangle), move(i + 1, j + 1, triangle));
  return cache[i][j];
};
