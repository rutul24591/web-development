# 🔍 Search in Rotated Sorted Array (JavaScript)

## 🔸 Problem Statement

There is an integer array `nums` sorted in ascending order (with distinct values).

Prior to being passed to your function, `nums` is possibly rotated at an unknown pivot index `k (1 <= k < nums.length)` such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` **(0-indexed)**. For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given a **rotated sorted array** `nums` and a target value `target`, return the **index** of `target` if it is in `nums`, or `-1` if it is not in `nums`.

You must write an algorithm with **O(log n)** runtime complexity.

---

## 🔹 Example

```js
Input: nums = [4,5,6,7,0,1,2], target = 0  
Output: 4

Input: nums = [4,5,6,7,0,1,2], target = 3  
Output: -1
```

---

## 🔸 Explanation

The array is sorted but **rotated at some pivot**. You can't use regular binary search directly. But we can still achieve **O(log n)** by:

1. Finding the middle element.
2. Determining which part (left or right) is sorted.
3. Narrowing the search space accordingly.

---

## ✅ JavaScript Solution

```javascript
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // If found the target
    if (nums[mid] === target) {
      return mid;
    }

    // Check if left half is sorted
    if (nums[left] <= nums[mid]) {
      // Target is in the left half
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // Right half is sorted
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  // If not found
  return -1;
}
```

---

## 🧪 Dry Run

```js
search([4,5,6,7,0,1,2], 0)
- mid = 3 → nums[3] = 7
- Left half sorted: 4 to 7
- 0 not in [4, 7] → search right half

left = 4, right = 6
- mid = 5 → nums[5] = 1
- Left half sorted: 0 to 1
- 0 in [0, 1] → search left

left = 4, right = 4
- mid = 4 → nums[4] = 0 (found)
```

---

## ⏱ Time Complexity

- **O(log n)** – standard binary search on a modified rotated array.

## 📦 Space Complexity

- **O(1)** – no extra space used, only pointers.

---

