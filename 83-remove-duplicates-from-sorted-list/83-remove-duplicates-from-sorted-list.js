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
const deleteDuplicates = function (head) {
  const origin = head;
  let cur = origin;
  while (cur !== null) {
    let { next } = cur;
    while (next !== null && next.val === cur.val) {
      next = next.next;
    }
    cur.next = next;
    cur = next;
  }

  return origin;
};
