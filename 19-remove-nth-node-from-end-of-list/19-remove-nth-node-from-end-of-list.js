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
  const arr = [];
  let cur = head;
  while (cur) {
    arr.push(cur);
    cur = cur.next;
  }
  const idx = arr.length - n;
  if (idx <= 0) return arr[idx + 1] ?? null;
  arr[idx - 1].next = arr[idx + 1] ?? null;
  return head;
};
