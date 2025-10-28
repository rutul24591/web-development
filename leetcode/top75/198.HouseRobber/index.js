/**
198. House Robber

Medium

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.


Example 1:
  Input: nums = [1,2,3,1]
  Output: 4
  Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
  Total amount you can rob = 1 + 3 = 4.

Example 2:
  Input: nums = [2,7,9,3,1]
  Output: 12
  Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
  Total amount you can rob = 2 + 9 + 1 = 12.
 

Constraints:
  1 <= nums.length <= 100
  0 <= nums[i] <= 400
 */

/**
 * Solution 1: Dynamic Programming
 * 
 * TC: O(n) - We are iterating through the list of houses once.
 * SC: O(n) - We are using an array to store the maximum amount that can be robbed up to each house.
 */

const robDP = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  // dp[i] = max money we can rob from houses[0..i]
  const dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    // either skip current house (dp[i-1]) or rob it (+ dp[i-2])
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }

  // answer is max we can rob up to last house
  return dp[nums.length - 1];
}

/** 
 * Solution 2: Space Optimized Dynamic Programming
 * TC: O(n) - We are iterating through the list of houses once.
 * SC: O(1) - We are using a constant amount of space.
 */
function robOptimized(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  // prev1 = best(i-1), prev2 = best(i-2)
  let prev2 = nums[0];            // best(0)
  let prev1 = Math.max(nums[0], nums[1]); // best(1)

  for (let i = 2; i < nums.length; i++) {
    const current = Math.max(prev1, nums[i] + prev2);
    // slide window
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}

// Example usage:
console.log(robDP([1, 2, 3, 1])); // Output: 4
console.log(robDP([2, 7, 9, 3, 1])); // Output: 12

console.log(robOptimized([1, 2, 3, 1])); // Output: 4
console.log(robOptimized([2, 7, 9, 3, 1])); // Output: 12

// Additional test cases
console.log(robDP([0])); // Output: 0
console.log(robDP([1])); // Output: 1
console.log(robDP([1, 2])); // Output: 2