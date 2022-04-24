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
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (!root) return [];
  const answer = [];
  const queue = [];
  queue.push([root]);
  while (queue.length) {
    const curLevels = queue.shift();
    answer.push(curLevels.map(n => n.val));
    const temp = [];
    for (let i = 0; i < curLevels.length; i++) {
      if (curLevels[i].left) {
        temp.push(curLevels[i].left);
      }
      if (curLevels[i].right) {
        temp.push(curLevels[i].right);
      }
    }
    if (temp.length) queue.push(temp);
  }
  return answer;
};
