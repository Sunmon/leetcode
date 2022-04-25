/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
const mergeTrees = function (root1, root2) {
  return merge(root1, root2, new TreeNode());
};

const merge = function (root1, root2, merged) {
  if (!root1 && !root2) return null;
  merged.val = (root1?.val ?? 0) + (root2?.val ?? 0);
  merged.left = merge(root1?.left, root2?.left, new TreeNode());
  merged.right = merge(root1?.right, root2?.right, new TreeNode());
  return merged;
};
