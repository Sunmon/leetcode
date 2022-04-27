/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

const [WHITE, GRAY, BLACK] = [0, 1, 2];
let adj = [[]];
let colors = [];
let topologicalOrder = [];

const findOrder = function (numCourses, prerequisites) {
  adj = Array.from(Array(numCourses), () => []);
  colors = Array(numCourses).fill(WHITE);
  topologicalOrder = [];
  for (const [a, b] of prerequisites) {
    adj[b].push(a);
  }
  let valid = true;
  for (let i = 0; i < numCourses; i++) {
    if (valid && colors[i] === WHITE) {
      valid = valid && dfs(i);
    }
  }

  return valid ? topologicalOrder.reverse() : [];
};

// Returns false if there is a cycle.
const dfs = function (node) {
  let valid = true;
  colors[node] = GRAY;
  for (const next of adj[node]) {
    if (colors[next] === GRAY) {
      return false;
    }
    if (valid && colors[next] === WHITE) {
      valid = valid && dfs(next);
    }
  }
  if (!valid) return false;
  topologicalOrder.push(node);
  colors[node] = BLACK;
  return true;
};
