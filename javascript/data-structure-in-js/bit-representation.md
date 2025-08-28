# Bit Representation of Integers (-16 to 16) in JavaScript

I'd be happy to explain bit representation and manipulation in JavaScript. Let's start with how integers from -16 to 16 are represented in binary, then cover bitwise operators and manipulation techniques.

## Bit Representation of Integers (-16 to 16)

In JavaScript, integers are represented using two's complement. Here's a table showing integers from -16 to 16 in binary (8-bit representation for clarity):

| Decimal | Binary (8-bit) | Hexadecimal |
| ------- | -------------- | ----------- |
| -16     | 11110000       | 0xF0        |
| -15     | 11110001       | 0xF1        |
| -14     | 11110010       | 0xF2        |
| -13     | 11110011       | 0xF3        |
| -12     | 11110100       | 0xF4        |
| -11     | 11110101       | 0xF5        |
| -10     | 11110110       | 0xF6        |
| -9      | 11110111       | 0xF7        |
| -8      | 11111000       | 0xF8        |
| -7      | 11111001       | 0xF9        |
| -6      | 11111010       | 0xFA        |
| -5      | 11111011       | 0xFB        |
| -4      | 11111100       | 0xFC        |
| -3      | 11111101       | 0xFD        |
| -2      | 11111110       | 0xFE        |
| -1      | 11111111       | 0xFF        |
| 0       | 00000000       | 0x00        |
| 1       | 00000001       | 0x01        |
| 2       | 00000010       | 0x02        |
| 3       | 00000011       | 0x03        |
| 4       | 00000100       | 0x04        |
| 5       | 00000101       | 0x05        |
| 6       | 00000110       | 0x06        |
| 7       | 00000111       | 0x07        |
| 8       | 00001000       | 0x08        |
| 9       | 00001001       | 0x09        |
| 10      | 00001010       | 0x0A        |
| 11      | 00001011       | 0x0B        |
| 12      | 00001100       | 0x0C        |
| 13      | 00001101       | 0x0D        |
| 14      | 00001110       | 0x0E        |
| 15      | 00001111       | 0x0F        |
| 16      | 00010000       | 0x10        |

## JavaScript Bitwise Operators

JavaScript provides these bitwise operators:

| Operator | Name                  | Description                                       |
| -------- | --------------------- | ------------------------------------------------- |
| `&`      | AND                   | Sets each bit to 1 if both bits are 1             |
| `\|`     | OR                    | Sets each bit to 1 if either bit is 1             |
| `^`      | XOR                   | Sets each bit to 1 if only one bit is 1           |
| `~`      | NOT                   | Inverts all the bits (0 becomes 1, 1 becomes 0)   |
| `<<`     | Left Shift            | Shifts bits left by specified number of positions |
| `>>`     | Right Shift           | Shifts bits right, preserving sign                |
| `>>>`    | Zero-fill Right Shift | Shifts bits right, filling with zeros             |

### Bitwise AND (`&`)

Returns 1 for each position where both operands have 1s.

```javascript
let a = 5; // 00000101
let b = 3; // 00000011
console.log(a & b); // 00000001 = 1
```

### Bitwise OR (`|`)

Returns 1 for each position where at least one operand has a 1.

```javascript
let a = 5; // 00000101
let b = 3; // 00000011
console.log(a | b); // 00000111 = 7
```

### Bitwise XOR (`^`)

Returns 1 for each position where exactly one operand has a 1.

```javascript
let a = 5; // 00000101
let b = 3; // 00000011
console.log(a ^ b); // 00000110 = 6
```

### Bitwise NOT (`~`)

Inverts all bits of the operand.

```javascript
let a = 5; // 00000101
console.log(~a); // 11111010 = -6
```

### Left Shift (`<<`)

Shifts bits to the left by the specified number of positions, filling with zeros.

```javascript
let a = 5; // 00000101
console.log(a << 1); // 00001010 = 10
console.log(a << 2); // 00010100 = 20
```

### Right Shift (`>>`)

Shifts bits to the right, preserving the sign bit.

```javascript
let a = 5; // 00000101
console.log(a >> 1); // 00000010 = 2

let b = -5; // 11111011 (in two's complement)
console.log(b >> 1); // 11111101 = -3
```

### Zero-fill Right Shift (`>>>`)

Shifts bits to the right, filling with zeros (doesn't preserve sign).

```javascript
let a = 5; // 00000101
console.log(a >>> 1); // 00000010 = 2

let b = -5; // 11111011 (in two's complement)
console.log(b >>> 1); // 01111101 = 125 (on 8 bits)
```

## Bit Manipulation Techniques

Let's explore some common bit manipulation techniques:

```javascript
// 1. Check if a number is even or odd
function isEven(num) {
    return (num & 1) === 0;
}
console.log(isEven(5)); // false
console.log(isEven(6)); // true

// 2. Check if a specific bit is set
function isBitSet(num, bitPosition) {
    return (num & (1 << bitPosition)) !== 0;
}
console.log(isBitSet(5, 0)); // true (5 = 101, bit 0 is set)
console.log(isBitSet(5, 1)); // false (5 = 101, bit 1 is not set)

// 3. Set a specific bit
function setBit(num, bitPosition) {
    return num | (1 << bitPosition);
}
console.log(setBit(5, 1)); // 7 (5 = 101, set bit 1 -> 111 = 7)
console.log(setBit(5, 0)); // 5 (bit 0 is already set)

// 4. Clear a specific bit
function clearBit(num, bitPosition) {
    return num & ~(1 << bitPosition);
}
console.log(clearBit(5, 0)); // 4 (5 = 101, clear bit 0 -> 100 = 4)
console.log(clearBit(5, 1)); // 5 (bit 1 is already 0)

// 5. Toggle a specific bit
function toggleBit(num, bitPosition) {
    return num ^ (1 << bitPosition);
}
console.log(toggleBit(5, 0)); // 4 (5 = 101, toggle bit 0 -> 100 = 4)
console.log(toggleBit(5, 1)); // 7 (5 = 101, toggle bit 1 -> 111 = 7)

// 6. Count number of set bits (Brian Kernighan's Algorithm)
function countSetBits(num) {
    let count = 0;
    while (num > 0) {
        num &= num - 1;
        count++;
    }
    return count;
}
console.log(countSetBits(5)); // 2 (5 = 101, has 2 set bits)
console.log(countSetBits(7)); // 3 (7 = 111, has 3 set bits)

// 7. Check if a number is a power of 2
function isPowerOfTwo(num) {
    return num > 0 && (num & (num - 1)) === 0;
}
console.log(isPowerOfTwo(4)); // true (4 = 100, is a power of 2)
console.log(isPowerOfTwo(6)); // false (6 = 110, not a power of 2)

// 8. Get the lowest set bit
function getLowestSetBit(num) {
    return num & -num;
}
console.log(getLowestSetBit(12)); // 4 (12 = 1100, lowest set bit is at position 2, which is 4)

// 9. Clear all bits from LSB to a given position
function clearBitsFromLSBtoPosition(num, position) {
    return num & (~0 << (position + 1));
}
console.log(clearBitsFromLSBtoPosition(15, 2)); // 12 (15 = 1111, clear bits 0-2 -> 1100 = 12)

// 10. Clear all bits from a given position to MSB
function clearBitsFromPositionToMSB(num, position) {
    return num & ((1 << position) - 1);
}
console.log(clearBitsFromPositionToMSB(15, 2)); // 3 (15 = 1111, clear bits from position 2 upward -> 0011 = 3)

// 11. Generate a mask with n right bits set to 1
function generateMask(n) {
    return (1 << n) - 1;
}
console.log(generateMask(3)); // 7 (binary: 111)
console.log(generateMask(4)); // 15 (binary: 1111)

// 12. Extract a range of bits
function extractBits(num, start, end) {
    const mask = ((1 << (end - start + 1)) - 1) << start;
    return (num & mask) >> start;
}
console.log(extractBits(169, 3, 6)); // 10 (169 = 10101001, extract bits 3-6 -> 1010 = 10)

// 13. Swap two numbers without using a third variable
function swapUsingBitwise(a, b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    return [a, b];
}
console.log(swapUsingBitwise(5, 7)); // [7, 5]

// 14. Find the single element in an array where all others appear twice
function findSingleElement(arr) {
    let result = 0;
    for (let num of arr) {
        result ^= num;
    }
    return result;
}
console.log(findSingleElement([4, 1, 2, 1, 2])); // 4
```

## Applications of Bit Manipulation

Bit manipulation is particularly useful in:

1. **Performance optimization**: Bit operations are generally faster than arithmetic operations
2. **Memory efficiency**: Storing multiple boolean flags in a single integer
3. **Cryptography**: Implementing encryption algorithms
4. **Low-level programming**: Interacting with hardware and protocols
5. **Algorithms**: Solving problems like finding unique elements or detecting duplicates

## Common Bit Manipulation Patterns

1. **Bit masking**: Using AND (`&`) to isolate specific bits
2. **Bit setting**: Using OR (`|`) to turn specific bits on
3. **Bit toggling**: Using XOR (`^`) to flip specific bits
4. **Bit extraction**: Using shifts and masks to extract bit ranges
5. **Bit counting**: Counting the number of set bits in an integer

Would you like me to explain any specific bit manipulation technique in more detail?
