# Longest Substring Without Repeating Characters — JavaScript Solutions

## 🧠 Problem Statement

Given a string `s`, find the length of the **longest substring** without repeating characters.

---

## ✅ Example

```javascript
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

---

## 💡 Approach 1: Brute Force

### 🔧 Idea:
- Generate all substrings.
- For each substring, check if it contains all unique characters.
- Keep track of the maximum length.

### ✅ Code:

```javascript
function lengthOfLongestSubstringBrute(s) {
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    let seen = new Set();
    for (let j = i; j < s.length; j++) {
      if (seen.has(s[j])) {
        break;
      }
      seen.add(s[j]);
      maxLength = Math.max(maxLength, j - i + 1);
    }
  }

  return maxLength;
}
```

### ⏱️ Time Complexity:
- `O(n²)` — two nested loops over the string.

### 🧠 Space Complexity:
- `O(k)` — space used by the set for unique characters in a window.

---

## ⚡ Approach 2: Optimal Sliding Window with Set

### 🔧 Idea:
- Use a sliding window.
- Store characters in a `Set` to track current substring.
- If a duplicate is found, shrink the window from the left until the duplicate is removed.

### ✅ Code:

```javascript
function lengthOfLongestSubstring(s) {
  let left = 0, right = 0;
  let set = new Set();
  let maxLength = 0;

  while (right < s.length) {
    let char = s[right];

    while (set.has(char)) {
      set.delete(s[left]);
      left++;
    }

    set.add(char);
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
}
```

### ⏱️ Time Complexity:
- `O(n)` — each character is visited at most twice.

### 🧠 Space Complexity:
- `O(k)` — where `k` is the number of unique characters.

---

## 🧪 Test Cases

```javascript
console.log(lengthOfLongestSubstringBrute("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("abcabcbb"));      // 3

console.log(lengthOfLongestSubstringBrute("bbbbb"));    // 1
console.log(lengthOfLongestSubstring("bbbbb"));         // 1

console.log(lengthOfLongestSubstringBrute("pwwkew"));   // 3
console.log(lengthOfLongestSubstring("pwwkew"));        // 3

console.log(lengthOfLongestSubstring(""));              // 0
console.log(lengthOfLongestSubstring(" "));             // 1
```

---

## 🔎 Summary

| Approach      | Time Complexity | Space Complexity | Notes                      |
|---------------|------------------|-------------------|-----------------------------|
| Brute Force   | O(n²)            | O(k)              | Simple but slow            |
| Sliding Window| O(n)             | O(k)              | Optimal and clean solution |

---

