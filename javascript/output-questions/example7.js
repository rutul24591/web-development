/**
 * Q7. Object Reference
 *
 * Explanation:
 *
 * obj2 references same object as obj1.
 * obj2.a = 2 mutates shared object.
 * Reassigning obj1 points it to new object → separate reference.
 *
 */
let obj1 = { a: 1 };
let obj2 = obj1;

obj2.a = 2;
obj1 = { a: 3 };

console.log(obj2.a, obj1.a);

/**
 * Output:
 *
 * 2 3
 */
