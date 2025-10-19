/**

213. House Robber II
Medium

Hint
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example 1:
  Input: nums = [2,3,2]
  Output: 3
  Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

Example 2:
  Input: nums = [1,2,3,1]
  Output: 4
  Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
  Total amount you can rob = 1 + 3 = 4.

Example 3:
  Input: nums = [1,2,3]
  Output: 3
 

Constraints:
  1 <= nums.length <= 100
  0 <= nums[i] <= 1000
 */

/**
 * 
 * TC: O(n) -  We are iterating through the list of houses twice.
 * SC: O(1) - We are using a constant amount of space.
 */

const rob = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  // helper solves the linear house robber on nums[l..r] inclusive
  function robLinear(nums, l, r) {
    // If the segment length is 0
    if (l > r) return 0;
    // prev = max up to i-2, curr = max up to i-1
    let prev = 0, curr = 0;
    for (let i = l; i <= r; i++) {
      const take = prev + nums[i];   // rob current house
      const skip = curr;            // skip current house
      const next = Math.max(take, skip);
      prev = curr;
      curr = next;
    }
    return curr;
  }

  // Two cases: exclude last, or exclude first
  const case1 = robLinear(nums, 0, n - 2); // take from 0..n-2
  const case2 = robLinear(nums, 1, n - 1); // take from 1..n-1

  return Math.max(case1, case2);
}

// Example usage:
console.log(rob([2, 3, 2])); // Output: 3
console.log(rob([1, 2, 3, 1])); // Output: 4
console.log(rob([1, 2, 3])); // Output: 3

// Additional test cases
console.log(rob([0])); // Output: 0
console.log(rob([1])); // Output: 1
console.log(rob([1, 2])); // Output: 2
console.log(rob([2, 1]));