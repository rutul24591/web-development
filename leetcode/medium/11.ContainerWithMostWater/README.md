## Container With Most Water

### 🚀 Problem Statement:
Given an array `height` where `height[i]` represents the height of a vertical line at index `i`, find two lines that together with the x-axis form a container, such that the container holds the most water. Return the **maximum area**.

---

### 🧠 Solution Approach:

#### **Two-Pointer Approach**:
1. Place **one pointer at the start** and **one at the end**.
2. Compute the **area** using the shorter height and update `maxArea`.
3. Move the **pointer pointing to the shorter height** (to possibly find a taller height).
4. Repeat until both pointers meet.

---

### ✅ JavaScript Code:

```javascript
function maxArea(height) {
    let left = 0, right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        // Calculate the area with the current left and right boundary
        let width = right - left;
        let minHeight = Math.min(height[left], height[right]);
        let currentArea = width * minHeight;
        
        // Update max area if we found a larger one
        maxArea = Math.max(maxArea, currentArea);
        
        // Move the pointer pointing to the shorter line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}

// Example Usage:
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49
console.log(maxArea([1,1]));               // Output: 1
```

---

### ⏳ Time Complexity:
- **O(n)** → Each element is visited at most once (one from left and one from right).

### 🗂 Space Complexity:
- **O(1)** → Only a few extra variables are used.

---

### 🏆 Why is this Optimal?
- **Brute Force Approach (O(n²))**: Checks all pairs `(i, j)`, but it's too slow for large `n`.
- **Two-Pointer Approach (O(n))**: Efficiently finds the maximum area in **one pass**.

---

