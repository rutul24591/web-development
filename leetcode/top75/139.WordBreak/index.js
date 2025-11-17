/* 139. Word Break
Medium

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:
  Input: s = "leetcode", wordDict = ["leet","code"]
  Output: true
  Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:
  Input: s = "applepenapple", wordDict = ["apple","pen"]
  Output: true
  Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
  Note that you are allowed to reuse a dictionary word.

Example 3:
  Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
  Output: false

Constraints:
  1 <= s.length <= 300
  1 <= wordDict.length <= 1000
  1 <= wordDict[i].length <= 20
  s and wordDict[i] consist of only lowercase English letters.
  All the strings of wordDict are unique. 
*/

/** Solution: Bottom-Up Dynamic Programming
 * TC: O(n * maxWordLen) substring checks; each substring extraction is O(length) in JS, 
 *      so more precisely O(n * maxWordLen * averageCheckCost). 
 *      In practice this is acceptable for typical constraints.
 * SC: O(n) ** dp array of size (n + 1)
 */
function wordBreak_DP(s, wordDict) {
  const n = s.length;
  const wordSet = new Set(wordDict);
  // optional optimization: find max word length to limit inner loop
  let maxLen = 0;
  for (const w of wordDict) if (w.length > maxLen) maxLen = w.length;

  const dp = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    // only check j values within max word length
    for (let j = Math.max(0, i - maxLen); j < i; j++) {
      const word = s.slice(j, i);
      if (dp[j] && wordSet.has(word)) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
}
console.log(wordBreak_DP("leetcode", ["leet", "code"])); // true
console.log(wordBreak_DP("applepenapple", ["apple", "pen"])); // true
console.log(wordBreak_DP("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false