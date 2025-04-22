/**
 * 3. Longest Substring Without Repeating Characters
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * TC: O(n), where n is the length of the string.
 * SC: O(k), where k is the number of unique characters. In the worst case, k can be equal to n.
 * 
 * Idea: Use a set to store the characters in the current substring.
 * If the current character is already in the set, then shrink the window from the left.
 * Add the current character to the set and update the max length.
 * 
 */
function lengthOfLongestSubstring(s) {
    let left = 0, right = 0;
    let set = new Set();
    let maxLength = 0;

    while (right < s.length) {
        let char = s[right];

        // If duplicate, shrink window from the left
        while (set.has(char)) {
            set.delete(s[left]);
            left++;
        }

        // Add the current character and update max length
        set.add(char);
        maxLength = Math.max(maxLength, right - left + 1);

        right++;
    }

    return maxLength;
};

/**
 * Brute force approach
 * TC: O(n^3)
 * SC: O(n)
 */
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

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstringBrute("abcabcbb"));