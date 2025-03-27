# **Valid Anagram (JavaScript Solution)**

## **Problem Statement**
Given two strings, `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

### **Example 1:**
```js
Input: s = "anagram", t = "nagaram"
Output: true
```

### **Example 2:**
```js
Input: s = "rat", t = "car"
Output: false
```

---

## **Solution 1: Sorting Approach**
### **Idea**
- Sort both strings and compare if they are equal.

### **Implementation**
```js
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    return s.split("").sort().join("") === t.split("").sort().join("");
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));         // false
```

### **Time & Space Complexity**
- **Time Complexity:** \(O(n \log n)\) (Due to sorting)
- **Space Complexity:** \(O(n)\) (Because sorting creates a new array)

---

## **Solution 2: Frequency Counter (Optimized Approach)**
### **Idea**
- Count character frequencies in both strings and compare them.

### **Implementation**
```js
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    
    let freq = {};

    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let char of t) {
        if (!freq[char]) return false; // If char is missing or exhausted
        freq[char]--;
    }

    return true;
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));         // false
```

### **Time & Space Complexity**
- **Time Complexity:** \(O(n)\) (Iterate over both strings once)
- **Space Complexity:** \(O(1)\) (Since there are only 26 possible lowercase letters, the frequency object is bounded)

---

## **Solution 3: Using an Array Instead of an Object (More Efficient)**
### **Implementation**
```js
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    
    let freq = new Array(26).fill(0); // Array for a-z

    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    return freq.every(count => count === 0);
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));         // false
```

### **Time & Space Complexity**
- **Time Complexity:** \(O(n)\)
- **Space Complexity:** \(O(1)\) (Only a fixed-size array of length 26)

---

## **Best Solution**
The **frequency counter using an array** (Solution 3) is the most optimal approach in terms of performance. 🚀
