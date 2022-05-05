/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode(0);
  let cur = dummy;
  let left = list1;
  let right = list2;
  while (left && right) {
    if (left.val > right.val) {
      cur.next = right;
      right = right.next;
    } else {
      cur.next = left;
      left = left.next;
    }
    cur = cur.next;
  }

  cur.next = left ?? right;

  return dummy.next;
};
