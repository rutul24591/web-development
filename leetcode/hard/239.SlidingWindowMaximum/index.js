
const slidingWindowMaxOptimal = (nums, k) => {
    // Handle edge cases
    if(nums === null || nums.length === 0 || k <= 0) return new Array(0);

    // Initialize the result and dequeue
    let result = [];
    let dequeue = [];

    // Iterate over the nums
    for(let iterator = 0; iterator < nums.length; iterator++){
        // Remove indices out of the current window
        while(dequeue.length && dequeue[0] < iterator - k + 1){
            dequeue.shift();
            console.log(`dequeue after shift() for index: ${iterator},`, dequeue);
        }

        // Remove indices whose values are less than nums[i]
        while(dequeue.length && nums[dequeue[dequeue.length - 1]] < nums[iterator]){
            dequeue.pop();
            console.log(`dequeue after pop() for index: ${iterator},`, dequeue);
        }

        // Add current index to deque
        dequeue.push(iterator);

        // Push max to result when first window is fully traversed
        if(iterator >= k - 1){
            result.push(nums[dequeue[0]]);
        }    
        console.log(`dequeue after push() for index: ${iterator},`, dequeue);
        console.log(`result array after processing index: ${iterator},`, result);
    }

    return result;
}

console.log(`FINAL RESULT: `, slidingWindowMaxOptimal([1,3,-1,-3,5,3,6,7], 3));