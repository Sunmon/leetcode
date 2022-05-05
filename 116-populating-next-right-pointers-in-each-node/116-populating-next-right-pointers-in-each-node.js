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
const connect = function (root) {
  link(root?.left, root?.right);
  return root;
};

const link = function (left, right) {
  if (!left) return;
  left.next = right;
  link(left.left, left.right);
  link(left.right, right.left);
  link(right.left, right.right);
};
