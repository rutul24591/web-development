/*
    Two pointers approach
    TC: O(N)
    SC: O(1)
    Idea: 
    - Start with two pointers at the beginning and end of the array.
    - Calculate the area between the two pointers.
    - Move the pointer that is shorter inwards.
    - Repeat until the two pointers meet.
    - Return the maximum area.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while(left < right){
        let width = right - left;
        let area = Math.min(height[left], height[right]) * width;

        maxArea = Math.max(maxArea, area);

        if(height[left] <= height[right]){
            left++
        }else{
            right--;
        }
    }

    return maxArea;
};

// Test cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
console.log(maxArea([4, 3, 2, 1, 4])); // 16
console.log(maxArea([1, 2, 1])); // 2

