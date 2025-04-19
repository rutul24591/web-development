


/**
 * TC: O(n)
 * SC: O(1)
 * Idea: Kadane’s Algorithm
 * Note: Most efficient, linear scan
 * @param {*} nums 
 * @returns 
 */
function maxSubArray(nums) {
    let maxSoFar = nums[0];
    let currentMax = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
      // Either start a new subarray or extend the current one
      currentMax = Math.max(nums[i], currentMax + nums[i]);
      maxSoFar = Math.max(maxSoFar, currentMax);
    }
  
    return maxSoFar;
}

/**
 * TC: O(n logn)
 * SC: O(log n)     
 * Idea: Divide and conquer recursively 
 * NOTE: Elegant, useful in interviews
 * 
 * @param {*} nums 
 * @returns 
 */
function maxSubArrayDivide(nums) {
    function helper(left, right) {
      if (left === right) return nums[left];
  
      const mid = Math.floor((left + right) / 2);
  
      // Recursively find max in left and right halves
      const leftMax = helper(left, mid);
      const rightMax = helper(mid + 1, right);
      const crossMax = maxCrossingSum(nums, left, mid, right);
  
      return Math.max(leftMax, rightMax, crossMax);
    }
  
    function maxCrossingSum(nums, left, mid, right) {
      let leftSum = -Infinity, sum = 0;
      for (let i = mid; i >= left; i--) {
        sum += nums[i];
        leftSum = Math.max(leftSum, sum);
      }
  
      let rightSum = -Infinity;
      sum = 0;
      for (let i = mid + 1; i <= right; i++) {
        sum += nums[i];
        rightSum = Math.max(rightSum, sum);
      }
  
      return leftSum + rightSum;
    }
  
    return helper(0, nums.length - 1);
}