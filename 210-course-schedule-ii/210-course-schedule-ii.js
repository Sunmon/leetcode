/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

const [WHITE, GRAY, BLACK] = [0, 1, 2];
let adj = [[]];
let colors = [];
let topologicalOrder = [];
let valid = true;

const findOrder = function (numCourses, prerequisites) {
  adj = Array.from(Array(numCourses), () => []);
  colors = Array(numCourses).fill(WHITE);
  topologicalOrder = [];
  valid = true;
  for (const [a, b] of prerequisites) {
    adj[b].push(a);
  }
  for (let i = 0; i < numCourses; i++) {
    if (colors[i] === WHITE) {
      dfs(i);
    }
  }

  return valid ? topologicalOrder.reverse() : [];
};

// Returns false if there is a cycle.
const dfs = function (node) {
  if (!valid) return;
  colors[node] = GRAY;
  for (const next of adj[node]) {
    if (colors[next] === GRAY) {
      valid = false;
      return;
    }
    if (colors[next] === WHITE) {
      dfs(next);
    }
  }
  topologicalOrder.push(node);
  colors[node] = BLACK;
};
