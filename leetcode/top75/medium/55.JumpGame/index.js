/* 55. Jump Game
Medium

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
Return true if you can reach the last index, or false otherwise.

Example 1:
  Input: nums = [2,3,1,1,4]
  Output: true
  Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
  Input: nums = [3,2,1,0,4]
  Output: false
  Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

Constraints:
  1 <= nums.length <= 104
  0 <= nums[i] <= 105 */


/** * Greedy Approach
 * TC: O(n) - single pass through the array
 * SC: O(1) - constant space
 */
var canJump = function (nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    // If we cannot reach this index
    if (i > maxReach) return false;

    // Update the farthest we can reach from here
    maxReach = Math.max(maxReach, i + nums[i]);

    // If we can already reach or surpass the last index
    if (maxReach >= nums.length - 1) return true;
  }

  return true;
};

console.log(canJump([2, 3, 1, 1, 4])); // true