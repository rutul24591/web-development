# 🧮 Evaluate Reverse Polish Notation (RPN) — JavaScript Solutions

---

## ✅ Problem Statement

You are given an array of strings `tokens` representing an arithmetic expression in **Reverse Polish Notation (RPN)**. Evaluate the expression and return the result as an integer.

**Operators supported**: `+`, `-`, `*`, `/`  
- Each operand may be an integer or another expression.  
- Division between two integers should truncate toward zero.

---

## 🔍 Examples

```js
Input: ["2", "1", "+", "3", "*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

Input: ["4", "13", "5", "/", "+"]
Output: 6
Explanation: (13 / 5 = 2), then 4 + 2 = 6

Input: ["10", "6", "9", "3", "/", "-", "*"]
Output: 60
Explanation: 9 / 3 = 3, 6 - 3 = 3, 10 * 3 = 30
```

---

## 🧠 Approach

- Use a stack to evaluate the expression iteratively.
- Alternatively, process the array recursively from end to start.
- Check for invalid input conditions like not enough operands or illegal tokens.

---

## ✅ Iterative JavaScript Solution

```javascript
function evalRPN(tokens) {
  const stack = [];

  for (const token of tokens) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else if (["+", "-", "*", "/"].includes(token)) {
      if (stack.length < 2) throw new Error("Invalid expression: not enough operands.");
      const b = stack.pop();
      const a = stack.pop();

      switch (token) {
        case "+": stack.push(a + b); break;
        case "-": stack.push(a - b); break;
        case "*": stack.push(a * b); break;
        case "/": stack.push(Math.trunc(a / b)); break;
      }
    } else {
      throw new Error(`Invalid token encountered: "${token}"`);
    }
  }

  if (stack.length !== 1) throw new Error("Invalid expression: too many operands.");
  return stack[0];
}
```

---

## 🔁 Recursive JavaScript Solution

```javascript
function evalRPNRecursive(tokens) {
  let index = tokens.length - 1;

  function helper() {
    if (index < 0) throw new Error("Invalid expression.");
    const token = tokens[index--];

    if (!isNaN(token)) {
      return Number(token);
    }

    if (!["+", "-", "*", "/"].includes(token)) {
      throw new Error(`Invalid token encountered: "${token}"`);
    }

    const b = helper();
    const a = helper();

    switch (token) {
      case "+": return a + b;
      case "-": return a - b;
      case "*": return a * b;
      case "/": return Math.trunc(a / b);
    }
  }

  const result = helper();
  if (index !== -1) throw new Error("Invalid expression: too many operands.");
  return result;
}
```

---

## 🛑 Invalid Input Handling

Both solutions handle:
- Non-numeric/non-operator tokens ➜ `throw new Error("Invalid token")`
- Not enough operands ➜ `throw new Error("Invalid expression: not enough operands")`
- Too many operands ➜ `throw new Error("Invalid expression: too many operands")`

---

## 🧪 Example Test Cases

```javascript
console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(evalRPN(["10", "6", "9", "3", "/", "-", "*"])); // 60
console.log(evalRPNRecursive(["2", "1", "+", "3", "*"])); // 9
```

---

## ⏱️ Time & Space Complexity

| Complexity      | Iterative          | Recursive          |
|----------------|--------------------|--------------------|
| **Time**       | O(n)               | O(n)               |
| **Space**      | O(n) (stack usage) | O(n) (call stack)  |

Where `n` is the number of tokens.

---
