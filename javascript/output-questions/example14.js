/**
 * Q14. setTimeout inside Loop (let)
 * 
 * Explanation:
 * 
 * let → block scope.
 * Each iteration captures different i.
 * Hence prints sequential values.
 */

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

/**
 * 
 * Output:
 * 
 * 0
 * 1
 * 2
 */