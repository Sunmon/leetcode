/**
 * @param {number[][]} edges
 * @return {number[]}
 */

let alreadyConnected = [[]];
let visited = [];
const findRedundantConnection = function (edges) {
  alreadyConnected = Array.from(Array(edges.length + 1), () => new Set());
  for (const edge of edges) {
    visited = Array(edges.length + 1).fill(false);
    if (isAlreadyConnected(edge[0], edge[1])) return edge;
    alreadyConnected[edge[0]].add(edge[1]);
    alreadyConnected[edge[1]].add(edge[0]);
  }
  return [];
};

// returns true if already connected x->y
const isAlreadyConnected = function (x, y) {
  if (x === y) return true;
  if (alreadyConnected[x].has(y)) return true;
  visited[x] = true;
  const values = [...alreadyConnected[x].values()];
  for (let i = 0; i < values.length; i++) {
    if (!visited[values[i]] && isAlreadyConnected(values[i], y)) return true;
  }
  return false;
};
