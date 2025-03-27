# Contains Duplicate - JavaScript Solutions

## Problem Statement
Given an integer array `nums`, return `true` if any value appears at least twice in the array, and `false` if every element is distinct.

---

## **Solution 1: Using a Set (Efficient Approach)**

### **Approach:**
- Use a `Set` to store unique elements.
- If an element already exists in the `Set`, return `true`.
- Otherwise, add it to the `Set`.
- If we reach the end without duplicates, return `false`.

### **Code:**
```javascript
function containsDuplicate(nums) {
    const seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}
```

### **Complexity Analysis:**
- **Time Complexity:** `O(n)` → We traverse the array once.
- **Space Complexity:** `O(n)` → In the worst case, we store all elements in the `Set`.

---

## **Solution 2: Sorting (Less Efficient)**

### **Approach:**
- Sort the array.
- Iterate through the array and check if consecutive elements are equal.

### **Code:**
```javascript
function containsDuplicate(nums) {
    nums.sort((a, b) => a - b); // Sorting takes O(n log n)
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return true;
        }
    }
    return false;
}
```

### **Complexity Analysis:**
- **Time Complexity:** `O(n log n)` → Sorting dominates the complexity.
- **Space Complexity:** `O(1)` (if sorting is in-place) or `O(n)` (if using built-in sort that requires extra space).

---

## **Solution 3: Using a Hash Map (Similar to Set)**

### **Approach:**
- Use an object `{}` as a hash map.
- If an element appears again, return `true`.
- Otherwise, store it in the object.

### **Code:**
```javascript
function containsDuplicate(nums) {
    const count = {};
    for (let num of nums) {
        if (count[num]) {
            return true;
        }
        count[num] = true;
    }
    return false;
}
```

### **Complexity Analysis:**
- **Time Complexity:** `O(n)` → Single pass through the array.
- **Space Complexity:** `O(n)` → Worst case, all elements are stored.

---

## **Solution 4: Brute Force (Inefficient)**

### **Approach:**
- Use two nested loops to check every pair.

### **Code:**
```javascript
function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}
```

### **Complexity Analysis:**
- **Time Complexity:** `O(n^2)` → Nested loop for all pairs.
- **Space Complexity:** `O(1)` → No extra storage.

---

## **Best Solution?**
- **Best Choice:** **Using a Set** (Solution 1) → `O(n)` time, `O(n)` space.
- **Alternative:** **Sorting approach** (Solution 2) if space is limited but allows modifying the array.
