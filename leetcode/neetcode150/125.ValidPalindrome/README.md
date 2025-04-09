# Valid Palindrome - JavaScript Solution

## Problem Statement
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

### **Example 1:**
**Input:**
```plaintext
"A man, a plan, a canal: Panama"
```
**Output:**
```plaintext
true
```

### **Example 2:**
**Input:**
```plaintext
"race a car"
```
**Output:**
```plaintext
false
```

### **Constraints:**
- The input string can contain printable ASCII characters.
- Empty strings are considered palindromes.

---

## **Solution**
### **Approach: Two-Pointer Technique**
1. Convert the string to lowercase and remove all non-alphanumeric characters.
2. Use two pointers: one at the start (`left`) and one at the end (`right`).
3. Move the pointers towards the center while skipping non-alphanumeric characters.
4. If all character pairs match, return `true`; otherwise, return `false`.

---

## **JavaScript Implementation**
### **Method 1: Using String Preprocessing**
```javascript
function isPalindrome(s) {
    // Convert string to lowercase and remove non-alphanumeric characters
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    let left = 0, right = s.length - 1;
    
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
console.log(isPalindrome("0P")); // false
```

---

### **Method 2: Optimized (O(1) Space Complexity)**
This approach avoids creating a new string and directly uses two pointers.

```javascript
function isPalindromeOptimized(s) {
    let left = 0, right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphaNumeric(s[left])) left++;
        while (left < right && !isAlphaNumeric(s[right])) right--;
        
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

function isAlphaNumeric(c) {
    return /[a-zA-Z0-9]/.test(c);
}

// Test cases
console.log(isPalindromeOptimized("A man, a plan, a canal: Panama")); // true
console.log(isPalindromeOptimized("race a car")); // false
console.log(isPalindromeOptimized(" ")); // true
console.log(isPalindromeOptimized("0P")); // false
```

---

## **Time & Space Complexity Analysis**
| Approach | Time Complexity | Space Complexity |
|----------|----------------|------------------|
| Using String Preprocessing | O(n) | O(n) |
| Optimized Two-Pointer | O(n) | O(1) |

- **Time Complexity:** O(n), since we iterate through the string once.
- **Space Complexity:**
  - **O(n)** for the first method due to the extra string storage.
  - **O(1)** for the optimized method, as we only use pointers.

---

## **Conclusion**
- The **first method** is simple but uses extra space.
- The **optimized method** improves space efficiency by avoiding string modification.


