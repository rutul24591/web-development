# Maximum Subarray Problem in JavaScript

## 🔶 Problem Statement

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

### Example:
```js
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

---

## ✅ 1. Kadane’s Algorithm – **O(n)**

### 🔹 JavaScript Solution:
```javascript
function maxSubArray(nums) {
  let maxSoFar = nums[0];
  let currentMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Either start a new subarray or extend the current one
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    maxSoFar = Math.max(maxSoFar, currentMax);
  }

  return maxSoFar;
}
```

### 🔹 Explanation:
- Traverse from left to right.
- At each step, decide whether to:
  - Start a new subarray (`nums[i]`)
  - Extend the previous subarray (`currentMax + nums[i]`)
- Keep track of the global maximum (`maxSoFar`).

### ⏱️ Time Complexity:
- **O(n)** — One pass through the array.

### 🧠 Space Complexity:
- **O(1)** — Constant extra space.

---

## ✅ 2. Divide and Conquer – **O(n log n)**

### 🔹 JavaScript Solution:
```javascript
function maxSubArrayDivide(nums) {
  function helper(left, right) {
    if (left === right) return nums[left];

    const mid = Math.floor((left + right) / 2);

    // Recursively find max in left and right halves
    const leftMax = helper(left, mid);
    const rightMax = helper(mid + 1, right);
    const crossMax = maxCrossingSum(nums, left, mid, right);

    return Math.max(leftMax, rightMax, crossMax);
  }

  function maxCrossingSum(nums, left, mid, right) {
    let leftSum = -Infinity, sum = 0;
    for (let i = mid; i >= left; i--) {
      sum += nums[i];
      leftSum = Math.max(leftSum, sum);
    }

    let rightSum = -Infinity;
    sum = 0;
    for (let i = mid + 1; i <= right; i++) {
      sum += nums[i];
      rightSum = Math.max(rightSum, sum);
    }

    return leftSum + rightSum;
  }

  return helper(0, nums.length - 1);
}
```

### 🔹 Explanation:
- Divide the array into two halves.
- Find:
  - Max subarray in the left half
  - Max subarray in the right half
  - Max subarray **crossing the midpoint**
- Return the max of the three.

### ⏱️ Time Complexity:
- **O(n log n)** — T(n) = 2T(n/2) + O(n)

### 🧠 Space Complexity:
- **O(log n)** — Due to recursive stack depth.

---

## 🔸 Summary:

| Approach            | Time Complexity | Space Complexity | Notes                        |
|---------------------|------------------|-------------------|-------------------------------|
| Kadane’s Algorithm  | O(n)             | O(1)              | Most efficient, linear scan   |
| Divide and Conquer  | O(n log n)       | O(log n)          | Elegant, useful in interviews |

---
