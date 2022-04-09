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
 * @return {number[]}
 */
const preorderTraversal = function (root) {
  const route = [];
  traversal(root, route);
  return route;
};

const traversal = function (cur, route) {
  if (cur === null) return;
  route.push(cur.val);
  traversal(cur.left, route);
  traversal(cur.right, route);
};
