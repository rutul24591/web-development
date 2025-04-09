# 🚀 Permutation in String - JavaScript Solution

## ✅ Problem Statement

Given two strings `s1` and `s2`, return `true` if `s2` contains a **permutation** of `s1`, or `false` otherwise.

In other words, one of `s1`'s permutations is a **substring** of `s2`.

---

## 🔹 Examples

### Example 1:
```
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
```

### Example 2:
```
Input: s1 = "ab", s2 = "eidboaoo"
Output: false
```

---

## 🧠 Approach

We can use the **Sliding Window** technique along with character **frequency counting**:

1. Count the frequency of characters in `s1`.
2. Use a sliding window of size equal to `s1.length` to traverse `s2`.
3. For each window, maintain the character count.
4. If the frequency maps match, return `true`.

---

## ✅ JavaScript Solution

```javascript
function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;

  // Helper function to compare two frequency arrays
  const isEqual = (arr1, arr2) => {
    for (let i = 0; i < 26; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };

  const s1Count = new Array(26).fill(0);
  const s2Count = new Array(26).fill(0);
  const aCharCode = 'a'.charCodeAt(0);

  // Count frequency for s1 and the first window of s2
  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - aCharCode]++;
    s2Count[s2.charCodeAt(i) - aCharCode]++;
  }

  // Slide the window
  for (let i = s1.length; i < s2.length; i++) {
    if (isEqual(s1Count, s2Count)) return true;

    // Remove the character going out of the window
    s2Count[s2.charCodeAt(i - s1.length) - aCharCode]--;
    // Add the character coming into the window
    s2Count[s2.charCodeAt(i) - aCharCode]++;
  }

  // Check the last window
  return isEqual(s1Count, s2Count);
}
```

---

## ⏱ Time Complexity

- **O(N)** where `N = s2.length`
  - Building frequency maps: O(26)
  - Sliding window over `s2`: O(N)
  - Each comparison of frequency arrays: O(26), done up to `N` times

So overall: **O(N)**

---

## 📦 Space Complexity

- **O(1)** constant space
  - Two fixed-size arrays of length 26 (for lowercase letters)

---
