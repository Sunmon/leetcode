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
  let i = list1;
  let j = list2;
  const header = { next: null };
  let cur = header;

  while (i !== null && j !== null) {
    if (i.val > j.val) {
      cur.next = j;
      j = j.next;
    } else {
      cur.next = i;
      i = i.next;
    }
    cur = cur.next;
  }

  while (i !== null) {
    cur.next = i;
    i = i.next;
    cur = cur.next;
  }
  while (j !== null) {
    cur.next = j;
    j = j.next;
    cur = cur.next;
  }

  return header.next;
};
