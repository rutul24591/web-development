/** 
    Suboptimal Approach(Two pointer. Convert string to lowercase and remove non-alphanumeric characters)
    TC: O(n)
    SC: O(n)
*/



function isPalindromeOptimal(s) {
    // Convert string to lowercase and remove non-alphanumeric characters
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    let left = 0, right = s.length - 1;
    
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

/**
 *      Suboptimal Approach(Convert string to lowercase and remove non-alphanumeric characters)
 *      TC: O(n)
 *      SC: O(n)
 */

function isPalindromeNormal(s) {
    // Convert string to lowercase and remove non-alphanumeric characters
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversed = s.split('').reverse().join('');

    return s === reversed;
}

/**
 *      Optimal Approach(Two pointer approach  with checking alphanumeric characters on the fly)
 *      TC: O(n)
 *      SC: O(1)
 */

function isPalindromeOptimized(s) {
    let left = 0, right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphaNumeric(s[left])) left++;
        while (left < right && !isAlphaNumeric(s[right])) right--;
        
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

function isAlphaNumeric(c) {
    return /[a-zA-Z0-9]/.test(c);
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
console.log(isPalindrome("0P")); // false


console.log(isPalindromeOptimal("A man, a plan, a canal: Panama")); // true
console.log(isPalindromeOptimal("race a car")); // false
console.log(isPalindromeOptimal(" ")); // true
console.log(isPalindromeOptimal("0P")); // false
