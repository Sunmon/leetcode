/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let [prev, cur] = [dummy, dummy];
  for (let i = 0; i < n; i++) {
    cur = cur?.next;
  }
  while (cur?.next) {
    prev = prev.next;
    cur = cur.next;
  }

  prev.next = prev.next.next;
  return dummy.next;
};
