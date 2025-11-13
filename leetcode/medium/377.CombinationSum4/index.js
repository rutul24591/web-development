/* 377. Combination Sum IV
Medium

Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

The test cases are generated so that the answer can fit in a 32-bit integer.

 

Example 1:
  Input: nums = [1,2,3], target = 4
  Output: 7
  Explanation:
  The possible combination ways are:
  (1, 1, 1, 1)
  (1, 1, 2)
  (1, 2, 1)
  (1, 3)
  (2, 1, 1)
  (2, 2)
  (3, 1)
  
  Note that different sequences are counted as different combinations.

Example 2:
  Input: nums = [9], target = 3
  Output: 0

Constraints:
  1 <= nums.length <= 200
  1 <= nums[i] <= 1000
  All the elements of nums are unique.
  1 <= target <= 1000

Follow up: What if negative numbers are allowed in the given array? How does it change the problem? What limitation we need to add to the question to allow negative numbers? */

/** Solution 1: BottomUp DP(Iterative) 
 * 
 * TC: O(n * m) - where n is target and m is number of elements in nums
 * SC: O(n) - dp array of size (target + 1)
*/

function combinationSum4(nums, target) {
  // dp[t] = number of combinations to make sum t
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1; // one way to make 0: choose nothing

  for (let t = 1; t <= target; t++) {
    for (const num of nums) {
      if (num <= t) {
        dp[t] += dp[t - num];
      }
    }
  }

  return dp[target];
}

console.log(combinationSum4([1, 2, 3], 4)); // 7

/** Solution 2: TopDown DP (Memoization)
 * 
 * TC: O(n * m) - where n is target and m is number of elements in nums
 * SC: O(n) - recursion stack + memoization
 */

function combinationSum4TopDown(nums, target) {
  const memo = new Array(target + 1).fill(-1);
  memo[0] = 1;

  function helper(remaining) {
    if (remaining < 0) return 0;
    if (memo[remaining] !== -1) return memo[remaining];

    let count = 0;
    for (const num of nums) {
      if (num <= remaining) {
        count += helper(remaining - num);
      }
    }
    memo[remaining] = count;
    return count;
  }

  return helper(target);
}

// Example
console.log(combinationSum4TopDown([1, 2, 3], 4)); // 7