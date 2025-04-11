# ✅ Valid Parentheses – JavaScript Solution

## 🧠 Problem Statement

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['`, and `']'`, determine if the input string is **valid**.

A string is valid if:
1. Open brackets are closed by the same type of brackets.
2. Open brackets are closed in the correct order.
3. Every closing bracket has a corresponding open bracket of the same type.

---

## 🔍 Examples

```javascript
Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false

Input: s = "([)]"
Output: false

Input: s = "{[]}"
Output: true
```

---

## ✅ JavaScript Solution

```javascript
function isValid(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  if(s.length % 2 !== 0) return false;

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char); // Push opening brackets
    } else {
      // For closing brackets
      if (stack.length === 0 || stack.pop() !== map[char]) {
        return false; // Mismatch or extra closing bracket
      }
    }
  }

  return stack.length === 0; // Check for any unmatched opening brackets
}
```

---

## ⏱ Time and Space Complexity

### ⌛ Time Complexity: **O(n)**
- We traverse the entire string once (`n` = length of the string).

### 🧠 Space Complexity: **O(n)**
- In the worst case, all characters are opening brackets, so the stack holds `n` items.

---

