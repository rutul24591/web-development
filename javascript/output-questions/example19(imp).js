/**
 * !!! doubt
 * Q19. Deleting Variables
 * 
 * Explanation:
 * delete works only on object properties.
 * var a becomes property of window → deletable → true.
 * let b is block-scoped binding → not deletable → false.
 */

var a = 1;
let b = 2;
console.log(delete a, delete b);


/**
 * Output:
 * 
 * true false
 * 
 * Uncaught SyntaxError: Delete of an unqualified identifier in strict mode. ( Chrome it gives this and not above)
 */