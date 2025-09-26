/* 23. Merge k Sorted Lists
Hard

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

    Input: lists = [[1,4,5],[1,3,4],[2,6]]
    Output: [1,1,2,3,4,4,5,6]
    Explanation: The linked-lists are:
      [
        1->4->5,
        1->3->4,
        2->6
      ]
      merging them into one sorted linked list:

      1->1->2->3->4->4->5->6

Example 2:

    Input: lists = []
    Output: []

Example 3:

    Input: lists = [[]]
    Output: []
 

Constraints:
  k == lists.length
  0 <= k <= 104
  0 <= lists[i].length <= 500
  -104 <= lists[i][j] <= 104
  lists[i] is sorted in ascending order.
  The sum of lists[i].length will not exceed 104. 
*/


// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}



/** 
 * TC : O(N log k) where N is the total number of nodes and k is the number of linked lists.
 * SC : O(1) if we don't consider the output list, otherwise O(N) for the output list.
 */
/**
 * 
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let curr = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  curr.next = list1 || list2;

  return dummy.next
};

var mergeKLists = function (lists) {
  if (!lists || lists.length === 0) return null;

  while (lists.length > 1) {
    let mergedLists = [];

    for (let i = 0; i < lists.length; i += 2) {
      let l1 = lists[i];
      let l2 = (i + 1 < lists.length) ? lists[i + 1] : null;

      mergedLists.push(mergeTwoLists(l1, l2));
    }
    lists = mergedLists;
  }

  return lists[0];
};
