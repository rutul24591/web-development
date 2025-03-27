/**
 *      Brute Force Approach
 *      Time Complexity: O(nlogn) (Due to sorting)
 *      Space Complexity: O(n) (Because sorting creates a new array)
 *      Idea: Sort both strings and compare if they are equal.
 *      Note: This approach is not efficient for large strings due to the sorting operation.
 */

function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    return s.split("").sort().join("") === t.split("").sort().join("");
}


/**
 *      Optimal Approach(Hashing or HashMap)
 *      Time Complexity: O(n) (Iterate over both strings once)
 *      Space Complexity: O(1)  (Since there are only 26 possible lowercase letters, the frequency object is bounded)
 *      Idea: Count character frequencies in both strings and compare them.
 * 
 */

function isAnagramOptimal(s, t) {
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

/**
 *      Optimal Approach 2(Hashing or HashMap)
 *      Time Complexity: O(n)
 *      Space Complexity: O(1) (Only a fixed-size array of length 26)
 *      Idea: Using an Array Instead of an Object (More Efficient)
 *      Note: This frequency counter using an array is the most optimal approach in terms of performance.
 */ 

function isAnagramOptimal2(s, t) {
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

// Test cases for Optimal Approach
console.log(isAnagramOptimal("anagram", "nagaram")); // true
console.log(isAnagramOptimal("rat", "car"));         // false

// Test cases for Optimal Approach 2
console.log(isAnagramOptimal2("anagram", "nagaram")); // true
console.log(isAnagramOptimal2("rat", "car"));         // false
