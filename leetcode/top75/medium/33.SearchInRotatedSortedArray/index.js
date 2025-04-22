/**
 * TC: O(log n)  standard binary search on a modified rotated array.
 * SC: O(1)  No extra data structure, only pointers
 * Idea: Binary Search
 * @param {*} nums 
 * @param {*} target 
 * @returns number
 */
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      // If found the target
      if (nums[mid] === target) {
        return mid;
      }
  
      // Check if left half is sorted
      if (nums[left] <= nums[mid]) {
        // Target is in the left half
        if (target >= nums[left] && target < nums[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        // Right half is sorted
        if (target > nums[mid] && target <= nums[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
  
    // If not found
    return -1;
}


const nums = [4,5,6,7,0,1,2], target = 0;

const nums1 = [4,5,6,7,0,1,2], target1 = 3

const nums2 = [1], target2 = 0;

console.log(`RESULT 1:`, search(nums, target));
console.log(`RESULT 2:`, search(nums1, target1));
console.log(`RESULT 3:`, search(nums2, target2));