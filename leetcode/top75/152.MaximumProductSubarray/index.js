/**
 * TC: O(n)  One pass through the array
 * SC: O(1)  Constant space used (no extra arrays)
 * @param {*} nums 
 * @returns 
 */
function maxProduct(nums) {
    if (nums.length === 0) return 0;
  
    let maxSoFar = nums[0];  // Maximum product ending here
    let minSoFar = nums[0];  // Minimum product ending here (for negative numbers)
    let result = nums[0];    // Global maximum
  
    for (let i = 1; i < nums.length; i++) {
      const curr = nums[i];
  
      // When multiplied by a negative number, max becomes min and vice versa
      if (curr < 0) {
        [maxSoFar, minSoFar] = [minSoFar, maxSoFar]; // Swap
      }
  
      // Update max/min product for current index
      maxSoFar = Math.max(curr, curr * maxSoFar);
      minSoFar = Math.min(curr, curr * minSoFar);
  
      // Update global max
      result = Math.max(result, maxSoFar);
    }
  
    return result;
  }
  