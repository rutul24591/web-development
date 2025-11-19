/* 283. Move Zeroes
Easy

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 
Example 1:
  Input: nums = [0,1,0,3,12]
  Output: [1,3,12,0,0]

Example 2:
  Input: nums = [0]
  Output: [0]
 
Constraints:
  1 <= nums.length <= 104
  -231 <= nums[i] <= 231 - 1
 
Follow up: Could you minimize the total number of operations done? */

/* Solution: 2 pointers - Fast and Slow
TC: O(n) where n is the length of the array.
SC: O(1) as we are using constant space.
*/

var moveZeroes = function (nums) {
  let pos = 0; // pointer where the next non-zero should be written

  // Step 1: Move all non-zero elements to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      pos++;
    }
  }

  // Step 2: Fill remaining positions with zeros
  while (pos < nums.length) {
    nums[pos] = 0;
    pos++;
  }
};

// Example usage:
let arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr); // Output: [1, 3, 12, 0, 0]

let arr2 = [0];
moveZeroes(arr2);
console.log(arr2); // Output: [0]