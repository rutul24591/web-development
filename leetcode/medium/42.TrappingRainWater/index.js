/**
 * 42. Trapping Rain Water
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 * TC: O(n)
 * SC: O(1)
 * Idea: Use two pointers to find the max height on the left and right side of the current index.
 * If the current height is less than the max height on the left side, then we can trap water.
 * If the current height is less than the max height on the right side, then we can trap water.
 * 
 * @param {number[]} height
 * @return {number}
 */

function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let totalWater = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                totalWater += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                totalWater += rightMax - height[right];
            }
            right--;
        }
    }

    return totalWater;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));