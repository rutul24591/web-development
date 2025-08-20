/**
 * !!! Block scope also follows lexical scope.
 * !!! Scope chaining works exactly the same for normal functions as well as arrow functions
 */

const a = 20;

console.log(a); // 20

{
    const a = 100;
    console.log(a); // 100
    {
        // If it cannot find the lexical block, it will try to find in nearest lexical chain.(Same for let and var)
        console.log(a); // 100
    }
}
console.log(a); // 20
