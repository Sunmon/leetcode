/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
  const newHeader = { val: 0, next: null };
  let [prev, cur] = [newHeader, { val: 0, next: head }];
  while (cur !== null) {
    cur = cur.next;
    while (cur !== null && cur.val === val) {
      cur = cur.next;
    }
    prev.next = cur;
    prev = prev.next;
  }
  return newHeader.next;
};
