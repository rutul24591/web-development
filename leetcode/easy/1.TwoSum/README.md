# Two Sum Problem - JavaScript Solutions

## Problem Statement
Given an array of integers `nums` and an integer `target`, return the indices of the two numbers that add up to `target`.

---

## Solution 1: Brute Force (Nested Loops)
```javascript
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// Example
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
```
### Complexity Analysis
- **Time Complexity:** \( O(n^2) \) due to the nested loop.
- **Space Complexity:** \( O(1) \) since no extra storage is used apart from the input.

---

## Solution 2: Using a Hash Map (Optimal Approach)
```javascript
function twoSum(nums, target) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    return [];
}

// Example
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
```
### Complexity Analysis
- **Time Complexity:** \( O(n) \) since we traverse the array once.
- **Space Complexity:** \( O(n) \) due to storing elements in the hash map.

---

## Solution 3: Using Sorting and Two Pointers (If Indices Are Not Required)
```javascript
function twoSumSorted(nums, target) {
    nums.sort((a, b) => a - b);
    let left = 0, right = nums.length - 1;

    while (left < right) {
        let sum = nums[left] + nums[right];

        if (sum === target) return [nums[left], nums[right]];
        else if (sum < target) left++;
        else right--;
    }

    return [];
}

// Example
console.log(twoSumSorted([2, 7, 11, 15], 9)); // Output: [2, 7]
```
### Complexity Analysis
- **Time Complexity:** \( O(n \log n) \) due to sorting.
- **Space Complexity:** \( O(1) \) since no extra space is used.

---

## Best Choice?
- If you need **indices** → **Hash Map Approach (`O(n)`) is optimal**.
- If you only need **values** and the array is not pre-sorted → **Two Pointers Approach works but requires sorting**.
- If constraints are **small** → **Brute Force works but is slow**.

