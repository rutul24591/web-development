/**
 * !!!
 * Q15. Object Property Keys
 * 
 * Explanation:
 * Numeric keys are converted to strings internally.
 * Both 1 and "1" → same property.
 * Symbol("1") would be a separate hidden key.
 * 
 * To access "one" value, place 1: "one" below like below
 *  const obj = {
      "1": "string one",
      1: "one",
      [Symbol("1")]: "symbol one"
    };
 * 
 * Output: 
 * one, one
 * 
 */

const obj = {  
  "1": "string one",
  1: "one",
  [Symbol("1")]: "symbol one"
};

console.log(obj[1], obj["1"]);
// console.log(obj[Number(1)]);

/**
 * 
 * Output:
 * 
 * string one string one
 */
