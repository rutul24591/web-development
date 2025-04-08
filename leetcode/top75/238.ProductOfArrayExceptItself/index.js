/**
 *      Two pass approach. Optimal solution.   
 *      Time Complexity: O(n)
 *      Space Complexity: O(1). Since problem statement asks to return the answer array.
 *      Idea: Use two pointers to calculate prefix and postfix products.
 */
function productOfArrayExceptSelf(nums) {
    let answer = new Array(nums.length).fill(1);
    let prefix = 1, postfix = 1;

    for(let i= 0; i < nums.length; i++){
        answer[i] = prefix;
        prefix *= nums[i];
    }

    for(let j = nums.length - 1; j >= 0; j--){
        answer[j] *= postfix;
        postfix *= nums[j];
    }   
    return answer;
}

// Example
console.log(productOfArrayExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
