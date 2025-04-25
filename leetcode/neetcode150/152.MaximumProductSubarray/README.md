# 🧮 Maximum Product Subarray — JavaScript Solution

## 🚩 Problem Statement

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the **largest product**, and return that product.

### 🧪 Example

```js
Input: nums = [2, 3, -2, 4]
Output: 6
Explanation: [2, 3] has the largest product = 6.
```

---

## ✅ JavaScript Solution

```javascript
function maxProduct(nums) {
  if (nums.length === 0) return 0;

  let maxSoFar = nums[0];  // Maximum product ending here
  let minSoFar = nums[0];  // Minimum product ending here (for negative numbers)
  let result = nums[0];    // Global maximum

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];

    // When multiplied by a negative number, max becomes min and vice versa
    if (curr < 0) {
      [maxSoFar, minSoFar] = [minSoFar, maxSoFar]; // Swap
    }

    // Update max/min product for current index
    maxSoFar = Math.max(curr, curr * maxSoFar);
    minSoFar = Math.min(curr, curr * minSoFar);

    // Update global max
    result = Math.max(result, maxSoFar);
  }

  return result;
}
```

---

## 🔍 Explanation

- We **track two values at each step**:
  - `maxSoFar`: Maximum product ending at current position.
  - `minSoFar`: Minimum product ending at current position (important because multiplying two negatives becomes positive).
- If the current number is negative, we **swap `maxSoFar` and `minSoFar`** before calculation.
- At each step, update the current max and min, and then update the overall result.

---

## 📈 Time & Space Complexity

| Complexity | Value |
|------------|-------|
| 🕒 Time     | `O(n)` — One pass through the array |
| 💾 Space    | `O(1)` — Constant space used (no extra arrays) |
