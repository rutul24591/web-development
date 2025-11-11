/* 
91. Decode Ways
Medium

You have intercepted a secret message encoded as a string of numbers. The message is decoded via the following mapping:

"1" -> 'A'

"2" -> 'B'

...

"25" -> 'Y'

"26" -> 'Z'

However, while decoding the message, you realize that there are many different ways you can decode the message because some codes are contained in other codes ("2" and "5" vs "25").

For example, "11106" can be decoded into:

"AAJF" with the grouping (1, 1, 10, 6)
"KJF" with the grouping (11, 10, 6)
The grouping (1, 11, 06) is invalid because "06" is not a valid code (only "6" is valid).
Note: there may be strings that are impossible to decode.

Given a string s containing only digits, return the number of ways to decode it. If the entire string cannot be decoded in any valid way, return 0.

The test cases are generated so that the answer fits in a 32-bit integer.

 

Example 1:
  Input: s = "12"
  Output: 2
  Explanation:
    "12" could be decoded as "AB" (1 2) or "L" (12).

Example 2:
  Input: s = "226"
  Output: 3
  Explanation:
    "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

Example 3:
  Input: s = "06"
  Output: 0
  Explanation:
    "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06"). In this case, the string is not a valid encoding, so return 0.

Constraints:
  1 <= s.length <= 100
  s contains only digits and may contain leading zero(s). 
*/

/**
 * 
 * Solution: Dynamic Programming (Space Optimized)
 *  TC: O(n) - single pass through the string
 *  SC: O(1) - only two variables to store previous states
 */

var numDecodings = function (s) {
  if (!s || s.length === 0) return 0; // no valid decoding for empty input per common LeetCode behavior

  // dp[0] = 1 (base for empty prefix)
  let prevPrev = 1; // dp[i-2]
  let prev = 0;     // dp[i-1] value for i=0 initially should be handled by first char processing

  // process first character to initialize prev (dp[1])
  if (s[0] === '0') return 0; // string starting with '0' -> 0 ways
  prev = 1;

  for (let i = 1; i < s.length; i++) {
    let curr = 0;

    // single digit valid? (not '0')
    if (s[i] !== '0') {
      curr += prev; // take single-digit mapping
    }

    // two-digit valid? check substring s[i-1..i] in [10,26]
    const twoDigit = parseInt(s.slice(i - 1, i + 1), 10);
    if (twoDigit >= 10 && twoDigit <= 26) {
      curr += prevPrev;
    }

    // shift window: dp[i-2] <- dp[i-1], dp[i-1] <- dp[i]
    prevPrev = prev;
    prev = curr;

    // optional early exit: if curr becomes 0 and later can't recover, we still continue since later two-digit could fix it.
  }

  return prev;
}