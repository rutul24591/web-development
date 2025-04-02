## Two Sum II - Input Array Is Sorted (JavaScript Solution)

### 🔹 Problem Statement
Given a **1-indexed** array of integers sorted in **ascending order**, find **two numbers** that add up to a given `target` and return their **1-based indices**.

### ✅ Approach: Two-Pointer Technique
Since the array is **sorted**, we can use the **two-pointer technique** to solve this problem efficiently.

### 🔹 Algorithm
1. **Initialize two pointers**:
   - `left = 0` (start of the array)
   - `right = numbers.length - 1` (end of the array)
2. **While `left < right`**:
   - Compute `sum = numbers[left] + numbers[right]`
   - If `sum === target`, return `[left + 1, right + 1]` (1-based index)
   - If `sum < target`, move `left` pointer **rightward** to increase the sum
   - If `sum > target`, move `right` pointer **leftward** to decrease the sum
3. **Return `[-1, -1]` if no solution exists** (though the problem guarantees exactly one solution).

### 🔹 JavaScript Implementation
```javascript
function twoSum2(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1]; // Return 1-based indices
        } else if (sum < target) {
            left++; // Move left pointer to increase sum
        } else {
            right--; // Move right pointer to decrease sum
        }
    }
    return [-1, -1]; // Should never be reached per problem statement
}
```

### 🔹 Example Runs
```javascript
console.log(twoSum2([2, 7, 11, 15], 9));     // Output: [1, 2]
console.log(twoSum2([1, 2, 3, 4, 4, 9], 8)); // Output: [4, 5]
console.log(twoSum2([1, 3, 5, 7], 12));      // Output: [3, 4]
```

### 🔹 Time & Space Complexity
- **Time Complexity:**
  - **O(n)** → We iterate through the array once using two pointers.
- **Space Complexity:**
  - **O(1)** → We use only a few extra variables (`left`, `right`, `sum`), so space usage is constant.

This approach is optimal since it leverages the **sorted property** of the array.