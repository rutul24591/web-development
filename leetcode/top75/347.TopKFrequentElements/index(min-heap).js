/* 347. Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

    Input: nums = [1,1,1,2,2,3], k = 2

    Output: [1,2]

Example 2:

    Input: nums = [1], k = 1

    Output: [1]

Example 3:

    Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2

    Output: [1,2]

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size. 
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class PriorityMinHeap {
  #heap = []; // private

  // Helpers
  #leftChild(i) { return 2 * i + 1; }
  #rightChild(i) { return 2 * i + 2; }
  #parent(i) { return Math.floor((i - 1) / 2); }
  #swap(i, j) { [this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]]; }

  // Public API
  size() { return this.#heap.length; }
  isEmpty() { return this.#heap.length === 0; }
  peek() { return this.#heap[0] ?? null; }
  getHeap() { return [...this.#heap]; } // shallow copy for inspection

  // compare by frequency (entry: [freq, val])
  cmp(i, j) {
    return this.#heap[i][0] - this.#heap[j][0];
  }

  push(entry) {
    // entry is [freq, val]
    this.#heap.push(entry);
    this.#bubbleUp(this.#heap.length - 1);
  }

  pop() {
    if (this.#heap.length === 0) return null;
    if (this.#heap.length === 1) return this.#heap.pop();
    const root = this.#heap[0];
    this.#heap[0] = this.#heap.pop();
    this.#sinkDown(0);
    return root;
  }

  // Restore heap by bubbling the element at index up
  #bubbleUp(index) {
    while (index > 0) {
      const parent = this.#parent(index);
      if (this.cmp(index, parent) < 0) {
        this.#swap(index, parent);
        index = parent; // continue from parent's index
      } else {
        break; // already in correct position
      }
    }
  }

  // Restore heap by sinking the element at index down
  #sinkDown(index) {
    const n = this.#heap.length;
    while (true) {
      let smallest = index;
      const left = this.#leftChild(index);
      const right = this.#rightChild(index);

      if (left < n && this.cmp(left, smallest) < 0) smallest = left;
      if (right < n && this.cmp(right, smallest) < 0) smallest = right;

      if (smallest !== index) {
        this.#swap(index, smallest);
        index = smallest;
      } else {
        break;
      }
    }
  }
}

// topKFrequent using the corrected MinHeap (push then pop if > k)
var topKFrequent = function (nums, k) {
  if (k === 0) return [];

  const freq = new Map();
  for (const n of nums) {
    freq.set(n, (freq.get(n) || 0) + 1);
  }

  const heap = new PriorityMinHeap();

  // Keep heap size <= k (min-heap keyed by frequency)
  for (const [num, count] of freq.entries()) {
    heap.push([count, num]);        // push [frequency, value]
    if (heap.size() > k) heap.pop(); // pop removes the smallest frequency automatically
  }

  // Extract results (pop returns min-first, so reverse to get high->low)
  const res = [];
  while (!heap.isEmpty()) {
    res.push(heap.pop()[1]);
  }
  return res.reverse();
};