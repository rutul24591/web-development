/**
 * Q31. Generator Function Execution
 * 
 * Explanation:
 * Generators pause at yield.
 * g.next() resumes execution until next yield.
 * Final next() finishes function → returns { value: undefined, done: true }.
 */

function* gen() {
  console.log("start");
  yield 1;
  console.log("middle");
  yield 2;
  console.log("end");
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

/**
 * Output:
 * 
 * start
 * 1
 * middle
 * 2
 * end
 * undefined

 */