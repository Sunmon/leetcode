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
  const dummy = new ListNode(-999, head);
  let prev = dummy;
  while (prev) {
    let cur = prev.next;
    while (cur?.val === prev.val) {
      cur = cur?.next;
    }

    prev.next = cur;
    prev = cur;
  }

  return dummy.next;
};
