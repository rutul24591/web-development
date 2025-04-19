---

# 🧩 Best Time to Buy and Sell Stock (Leetcode 121)

## 📝 Problem Statement

You're given an array `prices` where `prices[i]` is the price of a given stock on the `i-th` day.  
You want to maximize your profit by choosing a **single day to buy** one stock and choosing a **different day in the future to sell** that stock.  
Return the **maximum profit** you can achieve from this transaction.  
If you cannot achieve any profit, return `0`.

---

## ✅ JavaScript Solution

```javascript
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price; // Buy low
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice); // Sell high
    }
  }

  return maxProfit;
}
```

---

## 🧪 Example Usage

```javascript
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5 (Buy at 1, Sell at 6)
console.log(maxProfit([7, 6, 4, 3, 1]));    // Output: 0 (No profit possible)
```

---

## 🧠 Explanation

This approach keeps track of two things:
- `minPrice`: The lowest price encountered so far (ideal buy price).
- `maxProfit`: The highest profit calculated so far (difference between current price and `minPrice`).

### Step-by-step:
1. Initialize `minPrice` to `Infinity` and `maxProfit` to `0`.
2. Loop through each price in the array:
   - If the current price is lower than `minPrice`, update `minPrice`.
   - Otherwise, calculate the difference between the current price and `minPrice`, and update `maxProfit` if it's larger than the current `maxProfit`.

This guarantees you always buy at the lowest seen so far and sell at the current price if it's profitable.

---

## ⏱ Time Complexity: `O(n)`

- We traverse the array **once**, doing constant time operations at each step.
- Let `n` be the length of the `prices` array.
- Therefore, time complexity is **linear**, `O(n)`.

### ✅ Why it's optimal:
- Any nested loop (e.g., trying all buy-sell combinations) would be `O(n²)` and inefficient for large arrays.
- This is the most efficient possible solution for this problem.

---

## 🗃 Space Complexity: `O(1)`

- We only use two variables regardless of input size:
  - `minPrice`
  - `maxProfit`
- No additional memory is allocated for data structures like arrays or hash maps.
- Hence, space complexity is **constant**, `O(1)`.

---

## 🔁 Variants of the Problem

Let me know if you want to dive into more complex variations:

- [ ] **Leetcode 122** – Allow **multiple transactions** (buy/sell as many times as you want)
- [ ] Include **cooldown period** after a sell
- [ ] Add **transaction fee** for each buy/sell
- [ ] Track and return **actual buy/sell days**

---
