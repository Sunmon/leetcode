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
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoBST = function (root, val) {
  return insert(root, val);
};

const insert = function (root, val) {
  if (!root) return new TreeNode(val);

  if (root.val > val) root.left = insert(root.left, val);
  if (root.val < val) root.right = insert(root.right, val);
  return root;
};
