/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

let adj = [[]];
const findOrder = function (numCourses, prerequisites) {
  adj = Array.from(Array(numCourses), () => []);
  const indegrees = Array(numCourses).fill(0);
  for (const [a, b] of prerequisites) {
    adj[b].push(a);
    indegrees[a]++;
  }
  return topologyOrder(indegrees);
};

// Returns ordered array.
const topologyOrder = function (indegrees) {
  const queue = [];
  const order = [];
  let ptr = 0;

  for (let i = 0; i < indegrees.length; i++) {
    if (indegrees[i] === 0) queue.push(i);
  }

  while (ptr < queue.length) {
    const cur = queue[ptr++];
    for (let i = 0; i < adj[cur].length; i++) {
      if (--indegrees[adj[cur][i]] == 0) queue.push(adj[cur][i]);
    }
    order.push(cur);
  }

  if (ptr !== indegrees.length) return [];
  return order;
};
