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
