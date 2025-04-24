/**
 * TC: O(logn)     Binary search cuts the search space in half each step
 * SC: O(1)        Constant space usage, no extra data structures
 * Idea: Binary search and return nums[left]
 * 
 * @param {*} nums 
 * @returns 
 */
function findMid(nums){
    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        let mid = Math.floor((left+right)/2);
        console.log(`mid: `, mid);

        if(nums[mid] > nums[right]){
            console.log(nums[mid] + ' > ' + nums[right]);
            left = mid + 1;
            console.log(`left: `, left);
        }else{
            console.log(nums[mid] + ' < ' + nums[right]);
            right = mid;
            console.log(`right: `, right);
        }
    }

    return nums[left];
}

console.log(`RESULT: `, findMid([4, 5, 6, 7, 0, 1, 2]));