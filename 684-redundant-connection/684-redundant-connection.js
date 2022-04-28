/**
 * @param {number[][]} edges
 * @return {number[]}
 */
let dsu = []; // dsu[i] : is the number of nodes if (dsu[i] < 0). else, value is the number of parent node.
let cycle = [];
const findRedundantConnection = function (edges) {
  dsu = Array(edges.length + 1).fill(-1);
  cycle = [];
  for (const edge of edges) {
    union(edge);
  }
  return cycle.pop();
};

const find = function (u) {
  if (dsu[u] < 0) return u;
  dsu[u] = find(dsu[u]);
  return dsu[u];
};

const union = function ([u, v]) {
  const [x, y] = [find(u), find(v)];
  if (x === y) {
    // cycle
    cycle.push([u, v]);
  } else if (dsu[x] < dsu[y]) {
    dsu[x] += dsu[y];
    dsu[y] = x;
  } else {
    dsu[y] += dsu[x];
    dsu[x] = y;
  }
};
