### ✅ Problem Statement

**Sum of Two Integers**

Write a function to compute the sum of two integers `a` and `b`, but you **cannot use the `+` or `-` operators**.

---

### 💡 Explanation

This problem is generally solved using **bitwise operations**:

- **XOR ( ^ )** is used to add bits where there is no carry.
- **AND ( & )** and left shift ( `<<` ) are used to find the carry.

We keep computing the intermediate sum and carry until the carry becomes zero.

---

### ✅ JavaScript Solution

```javascript
function getSum(a, b) {
  while (b !== 0) {
    // Carry now contains common set bits of a and b
    let carry = a & b;

    // Sum of bits where at least one is not set
    a = a ^ b;

    // Carry is shifted by one so that adding it to a gives the required sum
    b = carry << 1;
  }
  return a;
}

**Time and Space Complexity**
Time Complexity: O(1) — Since JavaScript uses 32-bit signed integers internally, the loop runs a maximum of 32 times.
Space Complexity: O(1) — No extra space is used apart from a few variables.

🧠 Why This Is Asked in Interviews
Tests knowledge of bit manipulation.
Avoiding common arithmetic operations forces low-level thinking.
Shows understanding of binary math.