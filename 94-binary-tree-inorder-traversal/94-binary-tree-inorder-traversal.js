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
const inorderTraversal = function (root) {
  const answer = [];
  traversal(root, answer);
  return answer;
};
const traversal = function (node, arr) {
  if (!node) return;
  traversal(node.left, arr);
  arr.push(node.val);
  traversal(node.right, arr);
};
