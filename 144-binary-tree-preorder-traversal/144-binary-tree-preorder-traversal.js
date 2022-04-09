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
  const stack = [];
  if (root === null) return [];

  stack.push(root);
  let cur = root;
  // route.push(cur.val);
  while (stack.length > 0) {
    route.push(cur.val);
    if (cur?.right) {
      stack.push(cur.right);
    }

    if (cur?.left) {
      stack.push(cur.left);
    }

    cur = stack.pop();
  }
  return route;
};
