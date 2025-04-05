
# 🌧️ Trapping Rain Water - Two Pointer Approach

## 🧠 Problem Statement
Given an array `height` of non-negative integers where each element represents the height of a bar, compute how much water can be trapped after raining.

### Example:
```js
Input:  height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
```

---

## 💡 Intuition

Water trapped at index `i` depends on the **minimum of the tallest bars** to the left and right of `i`:
\[
\text{water}[i] = \min(\text{maxLeft}, \text{maxRight}) - \text{height}[i]
\]

Instead of scanning left and right for every index (brute force), we use two pointers to dynamically keep track of max heights on both ends.

---

## ⚙️ Two-Pointer Strategy

- Use two pointers: `left` at the start and `right` at the end of the array.
- Track `leftMax` and `rightMax` for the tallest bar seen so far from both ends.
- Process the pointer at the **shorter bar** side.
- Water can be trapped **only if current bar < max on that side**.

---

## 🧾 Algorithm Steps

1. Initialize:
   ```js
   left = 0, right = n - 1
   leftMax = 0, rightMax = 0
   totalWater = 0
   ```

2. While `left < right`:
   - If `height[left] < height[right]`:
     - If `height[left] >= leftMax`, update `leftMax`
     - Else, water = `leftMax - height[left]`
     - Move `left++`
   - Else:
     - If `height[right] >= rightMax`, update `rightMax`
     - Else, water = `rightMax - height[right]`
     - Move `right--`

---

## ✅ JavaScript Implementation

```js
function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let totalWater = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                totalWater += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                totalWater += rightMax - height[right];
            }
            right--;
        }
    }

    return totalWater;
}
```

---

## 🔍 Dry Run Example

**Input:** `[0,1,0,2,1,0,1,3,2,1,2,1]`

| Step | left | right | leftMax | rightMax | Water Trapped | totalWater |
|------|------|--------|---------|----------|----------------|-------------|
| 1    | 0    | 11     | 0       | 1        | 0              | 0           |
| 2    | 1    | 11     | 1       | 1        | 0              | 0           |
| 3    | 2    | 11     | 1       | 1        | 1              | 1           |
| 4    | 3    | 11     | 2       | 1        | 0              | 1           |
| 5    | 4    | 11     | 2       | 1        | 1              | 2           |
| 6    | 5    | 11     | 2       | 1        | 2              | 4           |
| 7    | 6    | 11     | 2       | 1        | 1              | 5           |
| 8    | 7    | 11     | 3       | 1        | 0              | 5           |
| 9    | 7    | 10     | 3       | 2        | 0              | 5           |
| 10   | 7    | 9      | 3       | 2        | 1              | 6           |

---

## 🧮 Time and Space Complexity

| Metric             | Value       |
|--------------------|-------------|
| ⏱️ Time Complexity | `O(n)`      |
| 💾 Space Complexity| `O(1)`      |

---

## 🎯 Key Takeaways

- 🔁 Traverse array only once with two pointers.
- ✅ Best possible time and space complexity.
- 💧 Water can only be trapped when there's a **higher bar on both sides**.
- 🤖 Pick the side with **smaller height** to move inward and guarantee correctness.

---

## 📌 Bonus Tip

If asked in interviews:
- First mention brute-force and precomputed array methods.
- Then say you’ll optimize it using **two pointers and constant space** for best performance.