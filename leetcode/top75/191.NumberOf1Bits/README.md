
## 🧠 Problem: Number of 1 Bits

### ✅ Problem Statement

Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the **Hamming weight**).

**Function Signature:**
```javascript
function hammingWeight(n: number): number
```

---

### ✅ Example

```javascript
Input: n = 11         // binary: 00000000000000000000000000001011  
Output: 3

Input: n = 128        // binary: 00000000000000000000000010000000  
Output: 1
```

---

### ✅ JavaScript Solution

```javascript
function hammingWeight(n) {
  let count = 0;

  while (n !== 0) {
    // Increment count if last bit is 1
    count += n & 1;

    // Right shift bits by 1 (logical shift for unsigned integers)
    n = n >>> 1;
  }

  return count;
}
```

---

### ✅ Explanation

- `n & 1`: Checks if the least significant bit is 1.
- `n >>> 1`: Unsigned right shift — shifts all bits one position to the right. It adds a 0 to the leftmost bit.
- Keep doing this until `n` becomes 0.
- Each time you find a 1 in the least significant bit, you increment the `count`.

---

### ✅ Time Complexity

- **O(32)** — Since JavaScript bitwise operations use **32-bit integers**, the loop runs at most 32 times regardless of the size of the input.

---

### ✅ Space Complexity

- **O(1)** — No extra space used except for a few variables.

---

### 🔍 Optional Optimization: Brian Kernighan’s Algorithm

