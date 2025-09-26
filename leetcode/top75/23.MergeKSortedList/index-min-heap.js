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


function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

class PriotityMinHeap {
  #heap = []; // Private Variable

  getHeap() {
    return [...this.#heap];
  }

  #leftChild(index) {
    return 2 * index + 1;
  }

  #rightChild(index) {
    return 2 * index + 2;
  }

  #parent(index) {
    return Math.floor((index - 1) / 2);
  }

  #swap(index1, index2) {
    [this.#heap[index1], this.#heap[index2]] = [this.#heap[index2], this.#heap[index1]];
  }


  isEmpty() {
    return this.#heap.length === 0;
  }

  insert(value) {
    // We always push at bottom of heap
    // Push to end of array
    this.#heap.push(value);

    // Bubble up in array
    let current = this.#heap.length - 1; //index of last element where insert was made

    this.bubbleUp(current);
  }

  remove() {
    // We only remove one item i.e root or heap[0]
    if (this.#heap.length === 0) return null;
    if (this.#heap.length === 1) return this.#heap.pop();

    let minValue = this.#heap[0];
    this.#heap[0] = this.#heap.pop();
    this.sinkDown(0);

    return minValue;
  }

  bubbleUp(index) {
    while (index > 0) {
      let parent = this.#parent(index);

      if (this.#heap[parent].val > this.#heap[index].val) {
        this.#swap(parent, index)
      }
      index = parent;
    }
  }

  sinkDown(index) {
    let length = this.#heap.length;
    let minIndex = index;

    while (true) {
      let leftIndex = this.#leftChild(index);
      let rightIndex = this.#rightChild(index);

      // Compare if left child is > than parent, move minIndex to leftChild.
      // We need to make sure any child is not empty i.e left < length
      if (leftIndex < length && this.#heap[leftIndex].val < this.#heap[minIndex].val) {
        minIndex = leftIndex;
      }

      // Compare if right child is greater than parent, move minIndex to rightChild. 
      // We need to make sure any child is not empty
      if (rightIndex < length && this.#heap[rightIndex].val < this.#heap[minIndex].val) {
        minIndex = rightIndex;
      }

      // If minIndex has changed, swap the elements at index and minIndex. 
      // Then point index to minIndex(bubble down)
      if (minIndex !== index) {
        this.#swap(index, minIndex);
        index = minIndex;
      } else {
        return;
      }
    }
  }
}
var mergeKLists = function (lists) {
  let heap = new PriotityMinHeap();

  for (let i = 0; i < lists.length; i++) {
    if (lists[i] !== null) {
      heap.insert(lists[i]); // // You are pushing head of each LL
    }
  }

  let dummy = new ListNode(0);
  let current = dummy;

  while (!heap.isEmpty()) {
    const smallest = heap.remove();
    current.next = smallest;
    current = current.next;

    if (smallest.next !== null) {
      heap.insert(smallest.next);
    }
  }
  return dummy.next;
}

