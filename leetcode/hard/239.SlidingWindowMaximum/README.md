# 🧊 Sliding Window Maximum — JavaScript Solution

## 🧠 Problem Statement

Given an array of integers `nums`, and an integer `k`, return the **maximum value in each sliding window** of size `k`.

---

## 🔍 Example

```js
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3  
Output: [3,3,5,5,6,7]
```

**Explanation:**
- Window [1,3,-1] → max = 3  
- Window [3,-1,-3] → max = 3  
- Window [-1,-3,5] → max = 5  
- Window [-3,5,3] → max = 5  
- Window [5,3,6] → max = 6  
- Window [3,6,7] → max = 7  

---

## ✅ Optimal JavaScript Solution (Using Deque)

```javascript
function maxSlidingWindow(nums, k) {
  const deque = []; // Will store indices of elements
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // Remove indices out of the current window
    while (deque.length && deque[0] < i - k + 1) {
      deque.shift();
    }

    // Remove indices whose values are less than nums[i]
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    // Add current index to deque
    deque.push(i);

    // Push max to result when first window is fully traversed
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}
```

---

## 🧠 Explanation

- **Deque** stores **indices** of elements in decreasing order of their values.
- The **front** of the deque always has the index of the **maximum** value in the current window.
- As we move the window:
  - We **remove out-of-window** indices from the front.
  - We **pop smaller elements** from the back as they can't be the max anymore.
- After the first `k` elements, we start adding the max of the window to the result.

---

## ⏱️ Time Complexity

- **O(n)** — Each element is added and removed from the deque at most once.

## 📦 Space Complexity

- **O(k)** — Deque stores at most `k` elements.

---
