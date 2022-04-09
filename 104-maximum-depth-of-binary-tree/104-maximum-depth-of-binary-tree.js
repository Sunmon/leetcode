/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
  return getDepth(root, 1);
};

const getDepth = function (cur, depth) {
  if (cur === null) return depth - 1;

  return Math.max(
    getDepth(cur.left, depth + 1),
    getDepth(cur.right, depth + 1),
  );
};
