/**
70. Climbing Stairs
Easy

Hint
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


Example 1:
  Input: n = 2
  Output: 2
  Explanation: There are two ways to climb to the top.
        1. 1 step + 1 step
        2. 2 steps

Example 2:
  Input: n = 3
  Output: 3
  Explanation: There are three ways to climb to the top.
        1. 1 step + 1 step + 1 step
        2. 1 step + 2 steps
        3. 2 steps + 1 step
 

Constraints:
  1 <= n <= 45

*/

/** Solution 1 (brute force) 
 * 
 * TC: O(n ^ 2) - exponential (repeated subproblems)
 * SC: O(n) - Recursion stack
 * Note - Not efficient for large n (e.g., n = 45).
*/

var climbStairs = function (n) {
  if (n <= 2) return n;        // Base cases: 1→1 way, 2→2 ways
  return climbStairs(n - 1) + climbStairs(n - 2);
};

/** Solution 2(Recursion + Memoization (Top-Down DP)) 
 * 
 * TC: O(n) - Each state is computed once.
 * SC: O(n) - Recursion stack + memoization Table
*/

var climbStairsTopDown = function (n, memo = {}) {
  if (n <= 2) return n;
  if (memo[n]) return memo[n];

  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
};

/** Solution 3 (Iterative Dynamic Programming (Bottom-Up))

 * 
  * TC: O(n) - We are iterating through the list of houses once.
  * SC: O(n) - We are using an array to store the maximum amount that can be robbed up to each house.
*/

var climbStairsBottomUp = function (n) {
  if (n <= 2) return n;

  let dp = [0, 1, 2]; // dp[1] = 1, dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]; // DP relation
  }
  return dp[n];
};

/** Solution 4 (Space Optimized Dynamic Programming)
 * 
 * TC: O(n) - We are iterating through the list of houses once.
 * SC: O(1) - We are using a constant amount of space.
*/
const climbStairsOptimized = function (n) {
  if (n <= 2) return n;

  let first = 1, second = 2;

  for (let i = 3; i < n.length; i++) {
    let current = first + second;
    first = second;
    second = current;
  }

  return second;
}


// Example usage:
console.log(climbStairs(5)); // Output: 8
console.log(climbStairsTopDown(5)); // Output: 8
console.log(climbStairsBottomUp(5)); // Output: 8
console.log(climbStairsOptimized(5)); // Output: 8

// Additional test cases
console.log(climbStairs(1)); // Output: 1
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
console.log(climbStairs(4)); // Output: 5
console.log(climbStairs(45)); // Output: 1836311903
console.log(climbStairsTopDown(45)); // Output: 1836311903
console.log(climbStairsBottomUp(45)); // Output: 1836311903
console.log(climbStairsOptimized(45)); // Output: 1836311903  
