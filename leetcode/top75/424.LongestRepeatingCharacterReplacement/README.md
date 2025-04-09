
# 🧠 Problem: Longest Repeating Character Replacement

Given a string `s` and an integer `k`, return the length of the **longest substring** that can be obtained by replacing **at most k characters** so that all the characters in the substring are the **same**.

---

## 🔍 Example

```js
Input: s = "AABABBA", k = 1
Output: 4

// Explanation: Replace one 'B' with 'A' to get "AABA" or "ABAA" which gives a substring of 4 repeating characters.
```

---

## 🧪 Brute-force Solution

### 🔓 Idea:
Check every substring. For each, count the frequency of characters and see if replacing (total length - max frequency character) ≤ k.

---

### 🧾 Code:

```javascript
function characterReplacementBrute(s, k) {
  let maxLen = 0;

  for (let start = 0; start < s.length; start++) {
    let freq = new Array(26).fill(0);

    for (let end = start; end < s.length; end++) {
      const index = s[end].charCodeAt(0) - 'A'.charCodeAt(0);
      freq[index]++;

      const maxFreq = Math.max(...freq);
      const windowSize = end - start + 1;

      if (windowSize - maxFreq <= k) {
        maxLen = Math.max(maxLen, windowSize);
      }
    }
  }

  return maxLen;
}
```

---

### 📊 Time and Space Complexity:

- **Time:** O(N² * 26) ≈ O(N²)
- **Space:** O(26) = O(1) (frequency array)

---

## ⚡ Optimal Sliding Window Solution

### 🚀 Idea:

Use sliding window. Track the max frequency of any character in the current window. If window size - maxFreq > k, shrink the window.

---

### 🧾 Code:

```javascript
function characterReplacement(s, k) {
  let left = 0;
  let maxFreq = 0;
  const count = new Array(26).fill(0);
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const idx = s[right].charCodeAt(0) - 'A'.charCodeAt(0);
    count[idx]++;
    maxFreq = Math.max(maxFreq, count[idx]);

    const windowSize = right - left + 1;

    // If more than k replacements are needed, shrink the window
    if (windowSize - maxFreq > k) {
      const leftIdx = s[left].charCodeAt(0) - 'A'.charCodeAt(0);
      count[leftIdx]--;
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
```

---

### 📊 Time and Space Complexity:

- **Time:** O(N)
- **Space:** O(26) = O(1)

---

## ✅ Key Concepts:

- Sliding Window
- Frequency Count
- Greedy Expansion + Shrinking Strategy

---

## 🏢 Asked In:

- Facebook
- Amazon
- Microsoft
- Google
- Netflix
- Adobe
- Apple
