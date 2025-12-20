# 🔍 Find Minimum in Rotated Sorted Array (JavaScript)

## 🧾 Problem Statement

Given a rotated sorted array (with **no duplicate elements**), find the **minimum element** in **O(log n)** time.

> A rotated sorted array is formed by taking a sorted array and rotating it at some pivot.  
> Example: `[4, 5, 6, 7, 0, 1, 2]` is a rotation of `[0, 1, 2, 4, 5, 6, 7]`.

---

## ✅ Examples

```js
Input: [4, 5, 6, 7, 0, 1, 2]
Output: 0

Input: [3, 4, 5, 1, 2]
Output: 1
```

---

## 🧠 Approach

We use **binary search** to find the pivot point where the rotation occurs because the minimum value is located at this point.

### Key Observations:
- If the array is already sorted (`nums[left] < nums[right]`), the first element is the smallest.
- The minimum is always in the **unsorted** half.

---

## ✅ JavaScript Solution

```javascript
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    // If mid element is greater than right, minimum must be in right half
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      // Minimum is in left half including mid
      right = mid;
    }
  }

  // Left now points to the minimum
  return nums[left];
}
```

---

## 📊 Time & Space Complexity

| Complexity | Value      | Explanation                                         |
|------------|------------|-----------------------------------------------------|
| Time       | `O(log n)` | Binary search cuts the search space in half each step |
| Space      | `O(1)`     | Constant space usage, no extra data structures     |

---

## 🧪 Test Cases

```javascript
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
console.log(findMin([3, 4, 5, 1, 2]));       // 1
console.log(findMin([11, 13, 15, 17]));      // 11
console.log(findMin([1]));                   // 1
console.log(findMin([2, 1]));                // 1
```

---
