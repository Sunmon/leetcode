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
 * @return {boolean}
 */
const isSymmetric = function (root) {
  return check(root.left, root.right);
};

const check = function (left, right) {
  if (left === null || right === null) {
    return left === right;
  }
  return (
    left.val === right.val &&
    check(left.left, right.right) &&
    check(left.right, right.left)
  );
};
