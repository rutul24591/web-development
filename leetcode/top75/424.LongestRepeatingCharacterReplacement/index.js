/**
 * TC: O(n^2)
 * SC: O(1)
 * Idea: Brute force
 */

function characterReplacementBrute(s, k) {
    let maxLen = 0;
  
    for (let i = 0; i < s.length; i++) {
      let count = new Array(26).fill(0);
      let maxFreq = 0;
  
      for (let j = i; j < s.length; j++) {
        count[s[j].charCodeAt(0) - 'A'.charCodeAt(0)]++;
        maxFreq = Math.max(maxFreq, count[s[j].charCodeAt(0) - 'A'.charCodeAt(0)]);
  
        // If the number of characters to replace > k, break
        let len = j - i + 1;
        if (len - maxFreq <= k) {
          maxLen = Math.max(maxLen, len);
        }
      }
    }
  
    return maxLen;
}
  


/**
 * TC: O(n)
 * SC: O(1)
 * Idea: Sliding window + 2 pointers
 * @param {*} s 
 * @param {*} k 
 * @returns 
 */
function characterReplacementOptimal(s, k) {
    let left = 0;
    let maxCount = 0; // Max count of the character
    let count = new Array(26).fill(0); // Array to store the count of each character
    let maxLen = 0; // Max length of the substring
  
    // Iterate through the string
    for (let right = 0; right < s.length; right++) {
        // Get the index of the character in the count array
        let index = s[right].charCodeAt(0) - 'A'.charCodeAt(0);
        count[index]++;

        // Update the max count of the character
        maxCount = Math.max(maxCount, count[index]);
  
        // Get the size of the window
        let windowSize = right - left + 1;
  
        // If more than k characters need replacement, shrink window
        if (windowSize - maxCount > k) {
            count[s[left].charCodeAt(0) - 'A'.charCodeAt(0)]--; // - 65
            left++;
        }
  
        // Update the max length of the substring
        maxLen = Math.max(maxLen, right - left + 1);
    }
  
    return maxLen;
  }
  
  console.log(characterReplacementOptimal("AABABBA", 1));
  console.log(characterReplacementOptimal("ABAB", 2));
  console.log(characterReplacementOptimal("BAAAB", 2));
  console.log(characterReplacementOptimal("ABBB", 2));
  console.log(characterReplacementBrute("BAAAB", 2)); 
  
  
  