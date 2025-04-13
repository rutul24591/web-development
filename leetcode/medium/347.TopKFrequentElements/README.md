
# Top K Frequent Elements – JavaScript Solution for Interviews

---

## 🧩 Problem Statement

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.

You may return the answer in **any order**, but it must contain the elements that appear most frequently.

**Example:**
```js
Input: nums = [1,1,1,2,2,3], k = 2  
Output: [1,2]
```

---

## 🧠 Explanation

We need to return the `k` elements that occur most frequently.

### Approaches:

1. **Min-Heap (Priority Queue)**  
   Maintain a heap of the top `k` elements based on frequency.

2. **Bucket Sort**  
   Use frequency as index in a bucket array to group numbers.

---

## ✅ Approach 1: Min-Heap (Custom Implementation – Interview Friendly)

### Logic:
1. Count frequency of each number.
2. Use a min-heap to keep only `k` most frequent numbers.
3. Extract the heap content as the result.

### Code:
```javascript
class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
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
    const freqMap = new Map();

    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    const heap = new MinHeap();
    for (let [num, freq] of freqMap.entries()) {
        heap.insert([num, freq]);
        if (heap.size() > k) {
            heap.remove();
        }
    }

    const result = [];
    while (heap.size() > 0) {
        result.push(heap.remove()[0]);
    }

    return result.reverse();
}
```

### ✅ Time & Space Complexity:
- **Time:** `O(N log K)`
- **Space:** `O(N + K)` for frequency map and heap

---

## ⚡️ Approach 2: Bucket Sort (O(N) Time)

### Logic:
1. Count frequency of each number.
2. Create a bucket array where index = frequency.
3. Iterate from high to low frequency and collect top `k` elements.

### Code:
```javascript
function topKFrequent(nums, k) {
    const freqMap = new Map();

    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    const bucket = Array(nums.length + 1).fill().map(() => []);

    for (let [num, freq] of freqMap.entries()) {
        bucket[freq].push(num);
    }

    const result = [];

    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        if (bucket[i].length > 0) {
            result.push(...bucket[i]);
        }
    }

    return result.slice(0, k);
}
```

### ✅ Time & Space Complexity:
- **Time:** `O(N)`
- **Space:** `O(N)`

---

## ⚖️ Which to Use in Interviews?

| Approach      | Time       | Use Case                  | Pros                     | Cons                    |
|---------------|------------|---------------------------|--------------------------|-------------------------|
| Min-Heap      | O(N log K) | `K` is small               | Works with large `N`     | Manual heap needed      |
| Bucket Sort   | O(N)       | `N` is large, K is small   | Simpler, no heap needed  | Slightly more memory    |

---

## 🚀 Final Interview Tips

- ✅ Don’t use external libraries (like `MinPriorityQueue`) in interviews
- ✅ Be ready to **implement your own heap**
- ✅ Clarify input constraints and size expectations
- ✅ Discuss both solutions with the interviewer before starting

---
