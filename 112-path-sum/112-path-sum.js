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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function (root, targetSum) {
  if (!root) return false;
  return dfs(root, targetSum);
};

const dfs = function (root, sum) {
  const stack = [];
  stack.push([root, sum]);

  while (stack.length) {
    const [cur, subSum] = stack.pop();
    if (!cur) continue;
    if (!cur.left && !cur.right) {
      if (subSum === cur.val) return true;
      continue;
    }

    stack.push([cur.left, subSum - cur.val]);
    stack.push([cur.right, subSum - cur.val]);
  }

  return false;
};
