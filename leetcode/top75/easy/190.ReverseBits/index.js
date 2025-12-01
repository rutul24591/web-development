/**
 * 
 * 
 * 190. Reverse Bits
 * Reverse bits of a given 32 bits signed integer.

 

 * Example 1:

 * Input: n = 43261596
 * 
 * Output: 964176192

 * Explanation:

 * Integer	Binary
 * 43261596	00000010100101000001111010011100
 * 964176192	00111001011110000010100101000000
 * 
 * Example 2:

 * Input: n = 2147483644

 * Output: 1073741822

 * Explanation:

 * Integer	Binary
 * 2147483644	01111111111111111111111111111100
 * 1073741822	00111111111111111111111111111110
 

 * Constraints:

 *  0 <= n <= 231 - 2
 *  n is even.
 

 * Follow up: If this function is called many times, how would you optimize it?
 */
var reverseBits = function (n) {
    // Step 1: start with an empty 32-bit result
    let result = 0;

    for (let i = 0; i < 32; i++) {
        result =
            (result << 1) | // Step 2: shift result left to make space
            (n & 1); // Step 3: copy the LAST bit of n into result

        // Step 4: shift n right (unsigned) to process next bit
        n >>>= 1;
    }
    // Step 5: force unsigned 32-bit result
    return result >>> 0;
};

console.log(reverseBits(43261596));
