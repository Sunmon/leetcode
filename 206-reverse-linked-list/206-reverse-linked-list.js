/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  let [i, j] = [null, head];
  while (j !== null) {
    const k = j.next;
    j.next = i;
    i = j;
    j = k;
  }

  return i;
};
