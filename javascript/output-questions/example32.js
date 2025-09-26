/**
 * !!!
 * Q32. Equality Quirk
 * 
 * Explanation:
 * 
 * ![] → false (empty array is truthy).
 * So expression → [] == false.
 * In coercion: [] → "" → 0, false → 0.
 * 0 == 0 → true.
 * 
 */

console.log([] == ![]);

/**
 * Output
 * 
 * true
 * 
 */