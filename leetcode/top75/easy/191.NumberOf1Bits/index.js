/**
 * TC: 0(32) Since JavaScript bitwise operations use 32-bit integers, the loop runs at most 32 times regardless of the size of the input.
 * SC: O(1) No extra space used except for a few variables.
 * @param {*} n 
 * @returns 
 */
function hammingWeight(n) {
    let count = 0;
  
    while (n !== 0) {
      // Increment count if last bit is 1
      count += n & 1;
  
      // Right shift bits by 1 (logical shift for unsigned integers)
      n = n >>> 1;
    }
  
    return count;
}

console.log(`For 3: `, hammingWeight(3));
console.log(`For 16: `, hammingWeight(16));
console.log(`For 32: `, hammingWeight(32));
console.log(`For 128: `, hammingWeight(128));


