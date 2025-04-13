/**
 * TC: O(n)
 * SC: O(n)
 * Idea: Bucket sort
 */

function topKFrequent(nums, k) {
    let freqMap = new Map();

    // Step 1: Count frequencies
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2: Create a bucket where index represents frequency
    let bucket = Array(nums.length + 1).fill(null).map(() => []);
    
    for (let [num, freq] of freqMap.entries()) {
        bucket[freq].push(num);
    }

    // Step 3: Collect top k elements from the highest frequency bucket
    let result = [];
    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        if (bucket[i].length > 0) {
            result.push(...bucket[i]);
        }
    }

    return result.slice(0, k);
}

// Example usage
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // Output: [1, 2]

// This problem could be well solved using heap. But we will need to create a custom heap.
// TC: O(n log k)
// SC: O(n + k)
class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    insert(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    remove() {
        if (this.size() === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return min;
    }

    _heapifyUp() {
        let index = this.size() - 1;
        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            if (this.heap[parentIdx][1] <= this.heap[index][1]) break;
            [this.heap[parentIdx], this.heap[index]] = [this.heap[index], this.heap[parentIdx]];
            index = parentIdx;
        }
    }

    _heapifyDown() {
        let index = 0;
        while (2 * index + 1 < this.size()) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = left;

            if (right < this.size() && this.heap[right][1] < this.heap[left][1]) {
                smallest = right;
            }

            if (this.heap[index][1] <= this.heap[smallest][1]) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

function topKFrequent(nums, k) {
    let freqMap = new Map();

    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    let minHeap = new MinHeap();
    
    for (let [num, freq] of freqMap.entries()) {
        minHeap.insert([num, freq]);
        if (minHeap.size() > k) {
            minHeap.remove();
        }
    }

    let result = [];
    while (!minHeap.isEmpty()) {
        result.push(minHeap.remove()[0]);
    }

    return result.reverse();
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // Output: [1, 2]


// With Nodejs 20+, we can solve using priority queue.
// TC: O(n log k)
// SC: O(n + k) 

const { PriorityQueue } = require('node:queue');

function topKFrequent(nums, k) {
    let freqMap = new Map();

    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    let minHeap = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });

    for (let [num, freq] of freqMap.entries()) {
        minHeap.enqueue([num, freq]);
        if (minHeap.size > k) {
            minHeap.dequeue();
        }
    }

    let result = [];
    while (minHeap.size > 0) {
        result.push(minHeap.dequeue()[0]);
    }

    return result.reverse();
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // Output: [1, 2]
