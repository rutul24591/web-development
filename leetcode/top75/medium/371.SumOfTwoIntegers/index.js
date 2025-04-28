/** 
 * Time Complexity: O(1) — Since JavaScript uses 32-bit signed integers internally, the loop runs a maximum of 32 times.
*  Space Complexity: O(1) — No extra space is used apart from a few variables.
 * Idea: 
 * 
 * This problem is generally solved using bitwise operations:
 * 1. XOR ( ^ ) is used to add bits where there is no carry.
 * 2. AND ( & ) and left shift ( << ) are used to find the carry.
 * We keep computing the intermediate sum and carry until the carry becomes zero.

 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function getSum(a, b) {
    while (b !== 0) {
      // Carry now contains common set bits of a and b
      let carry = a & b;
  
      // Sum of bits where at least one is not set
      a = a ^ b;
  
      // Carry is shifted by one so that adding it to a gives the required sum
      b = carry << 1;
    }
    return a;
}


console.log('RESULT 1:', getSum(2,5));
console.log('RESULT 2:', getSum(32,45));
