/**
 * TC: O(n)    We traverse the entire string once (n = length of the string).
 * SC: O(n)    In the worst case, all characters are opening brackets, so the stack holds n items.
 * Idea: Create a map and a stack. Iterate through the string and push only opening brackets 
 * else pop(if closing brackets) and compare to the relevant item in map.
 * @param {*} s 
 * @returns 
 */

function isValid(s) {
    const stack = [];
    const map = {
      ')': '(',
      '}': '{',
      ']': '[',
    };

    if(s.length % 2 !== 0) return false;
  
    for (let char of s) {
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char); // Push opening brackets
      } else {
        // For closing brackets
        if (stack.length === 0 || stack.pop() !== map[char]) {
          return false; // Mismatch or extra closing bracket
        }
      }
    }
  
    return stack.length === 0; // Check for any unmatched opening brackets
  }

  console.log(`RESULT: `, isValid('[{(){)]'));
  console.log(`RESULT: `, isValid('[{(){}}]'));
  console.log(`RESULT: `, isValid('({[]})'));
  console.log(`RESULT: `, isValid('[{())}]'));