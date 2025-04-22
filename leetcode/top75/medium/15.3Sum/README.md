## **3Sum Problem in JavaScript**

### **Problem Statement**
Given an integer array `nums`, return all the unique triplets `[nums[i], nums[j], nums[k]]` such that:
- `i != j != k`
- `nums[i] + nums[j] + nums[k] == 0`

### **Optimal JavaScript Solution**
We use **sorting + two-pointer technique** for an efficient solution.

```javascript
function threeSum(nums) {
    nums.sort((a, b) => a - b); // Step 1: Sort the array
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for 'i'

        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates for 'left'
                while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates for 'right'
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}
```

### **Time & Space Complexity**
- **Sorting Complexity:** \(O(n \log n)\)
- **Two-pointer traversal for each element:** \(O(n)\)
- **Overall Complexity:** \(O(n^2)\)
- **Space Complexity:** \(O(1)\) (excluding output storage)

### **Example Run**
#### **Input:**
```javascript
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
```
#### **Output:**
```javascript
[[-1, -1, 2], [-1, 0, 1]]
```

This method efficiently finds all unique triplets that sum up to zero.
