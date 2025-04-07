# **Product of Elements Except Itself in JavaScript**

## **Problem Statement**
Given an integer array `nums`, return an array `output` such that `output[i]` is the product of all elements in `nums` except `nums[i]`.

---

## **Solution 1: Using Prefix and Suffix Products (Efficient Approach)**

### **Algorithm**
1. Create two arrays:
   - `prefix`: Stores the cumulative product from the left.
   - `suffix`: Stores the cumulative product from the right.
2. Compute the prefix product.
3. Compute the suffix product.
4. Compute the final result as `output[i] = prefix[i] * suffix[i]`.

### **Implementation**
```javascript
function productExceptSelf(nums) {
    let n = nums.length;
    let output = new Array(n).fill(1);
    
    let prefix = new Array(n).fill(1);
    let suffix = new Array(n).fill(1);

    // Compute prefix products
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    // Compute suffix products
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }

    // Compute result
    for (let i = 0; i < n; i++) {
        output[i] = prefix[i] * suffix[i];
    }

    return output;
}

// Example Usage
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
```

### **Time and Space Complexity**
- **Time Complexity**: **O(n)** (Three passes: prefix, suffix, and final computation)
- **Space Complexity**: **O(n)** (Extra `prefix` and `suffix` arrays)

---

## **Solution 2: Optimized Space Complexity (O(1) Extra Space)**
Instead of using two separate arrays for prefix and suffix, we can compute everything in the output array itself.

### **Algorithm**
1. Use the `output` array to store prefix products.
2. Traverse again from right and multiply with suffix products.

### **Implementation**
```javascript
function productExceptSelfOptimized(nums) {
    let n = nums.length;
    let output = new Array(n).fill(1);

    // Compute prefix products in the output array
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        output[i] = prefix;
        prefix *= nums[i];
    }

    // Compute suffix products and update the output array
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= suffix;
        suffix *= nums[i];
    }

    return output;
}

// Example Usage
console.log(productExceptSelfOptimized([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
```

### **Time and Space Complexity**
- **Time Complexity**: **O(n)**
- **Space Complexity**: **O(1)** (Ignoring the output array, which is required for the answer)

---

## **Solution 3: Using Division (Not Recommended)**
If division is allowed, we can compute:
1. `totalProduct = product of all elements`
2. Each element will be `totalProduct / nums[i]`.

However, this is not recommended because:
- Division might cause floating-point precision issues.
- Doesn't work when the array contains zeroes.

### **Implementation**
```javascript
function productExceptSelfWithDivision(nums) {
    let totalProduct = 1;
    let zeroCount = 0;

    // Calculate total product and count zeroes
    for (let num of nums) {
        if (num !== 0) {
            totalProduct *= num;
        } else {
            zeroCount++;
        }
    }

    let output = new Array(nums.length).fill(0);

    // If more than one zero, all elements will be zero
    if (zeroCount > 1) return output;

    for (let i = 0; i < nums.length; i++) {
        if (zeroCount === 1) {
            output[i] = nums[i] === 0 ? totalProduct : 0;
        } else {
            output[i] = totalProduct / nums[i];
        }
    }

    return output;
}

// Example Usage
console.log(productExceptSelfWithDivision([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
console.log(productExceptSelfWithDivision([0, 2, 3, 4])); // Output: [24, 0, 0, 0]
```

### **Time and Space Complexity**
- **Time Complexity**: **O(n)**
- **Space Complexity**: **O(1)**

---

## **Best Approach**
The **optimized space solution (Solution 2)** is the best because:
- It runs in **O(n) time**.
- Uses **O(1) extra space** (modifying output in-place).

