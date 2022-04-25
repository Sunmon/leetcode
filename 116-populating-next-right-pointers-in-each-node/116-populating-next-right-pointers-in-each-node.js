/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

const levels = [];
const connect = function (root) {
  getLevels(root, 0);
  for (let i = 0; i < levels.length; i++) {
    for (let j = 0; j < levels[i].length - 1; j++) {
      levels[i][j].next = levels[i][j + 1];
    }
  }
  return root;
};

const getLevels = function (root, level) {
  if (!root) return;
  if (!Array.isArray(levels[level])) levels[level] = [];
  levels[level].push(root);
  getLevels(root.left, level + 1);
  getLevels(root.right, level + 1);
};
