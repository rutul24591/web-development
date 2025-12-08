/* 19. Remove Nth Node From End of List
Medium

Hint
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
  Input: head = [1,2,3,4,5], n = 2
  Output: [1,2,3,5]

Example 2:
  Input: head = [1], n = 1
  Output: []

Example 3:
  Input: head = [1,2], n = 1
  Output: [1]
 

Constraints:
  The number of nodes in the list is sz.
  1 <= sz <= 30
  0 <= Node.val <= 100
  1 <= n <= sz
 
Follow up: Could you do this in one pass? */

/**
 * Solution: 
 * TC: O(L) where L is the length of the linked list.
 * SC: O(1) as we are using constant space.
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  let fast = dummy;
  let slow = dummy;

  // Move fast pointer n+1 steps ahead
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // Move both pointers until fast reaches end
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  // Skip the target node
  slow.next = slow.next.next;


  return dummy.next;
};