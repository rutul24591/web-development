/* 143. Reorder List

Medium
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:


L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 
Example 1:

  Input: head = [1,2,3,4]
  Output: [1,4,2,3]

Example 2:

  Input: head = [1,2,3,4,5]
  Output: [1,5,2,4,3]
 

Constraints:

The number of nodes in the list is in the range [1, 5 * 104].
1 <= Node.val <= 1000 */


/**
 * 
 * Complexity
 * Time: O(n) — each node is visited a constant number of times (finding middle, reversing, merging).
 * Space: O(1) extra space — only a few pointers used; we mutate the original list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next || !head.next.next) return // 0,1,2 nodes scenario

  // 1. Find middle(end of first half)
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Slow now is at middle (odd -> exact, even -> end element of first half)

  // 2. Reverse the second half
  let second = slow.next; // start of second half
  slow.next = null; // Making end of first list element point to null. Cut first half
  let prev = null;

  while (second) {
    let nextTemp = second.next;
    second.next = prev;
    prev = second;
    second = nextTemp;
  }

  // prev is head of reversed second half


  // 3) Merge first and reversed second
  let first = head;
  second = prev;

  while (second) {
    let nextFirst = first.next;
    let nextSecond = second.next;

    first.next = second;
    second.next = nextFirst;

    first = nextFirst;
    second = nextSecond;
  }
};