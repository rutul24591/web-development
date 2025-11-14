/* 62. Unique Paths
Medium

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
The test cases are generated so that the answer will be less than or equal to 2 * 109.

Example 1:
  Input: m = 3, n = 7
  Output: 28

Example 2:
  Input: m = 3, n = 2
  Output: 3
  Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
    1. Right -> Down -> Down
    2. Down -> Down -> Right
    3. Down -> Right -> Down

Constraints:
  1 <= m, n <= 100 */

/** Solution: Dynamic Programming
 *  TC: O(m × n) - We fill an m x n grid
 *  SC: O(m × n) - dp array of size m x n
 * */

var uniquePaths = function (m, n) {
  // If either dimension is 0, no paths (not typical in leetcode inputs).
  if (m <= 0 || n <= 0) return 0;

  // dp[j] will hold number of ways to reach cell in current row at column j.
  // initialize with 1s because first row all have 1 way.
  const dp = new Array(n).fill(1);

  // iterate rows starting from second row (i = 1 .. m-1)
  for (let i = 1; i < m; i++) {
    // start j from 1 because dp[0] remains 1 (first column always 1)
    for (let j = 1; j < n; j++) {
      dp[j] = dp[j] + dp[j - 1];
    }
  }

  // answer is ways to reach last column in last row
  return dp[n - 1];
};