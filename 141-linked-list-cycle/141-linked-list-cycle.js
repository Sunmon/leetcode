/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

const hasCycle = function (head) {
  const s = new Set();
  return check(head, s);
};

const check = function (head, s) {
  if (!head) return false;
  if (s.has(head)) {
    return true;
  }
  s.add(head);

  return check(head.next, s);
};
