/**
 * Q4. Shadowing
 *
 * Explanation:
 *
 * Uncaught SyntaxError: Identifier 'x' has already been declared
 * var if function scoped and let, const are block scoped.
 * var tries to redeclare x in the same scope chain → conflict with block let.
 * If all were let, the innermost would shadow outer ones.
 */
let x = 100;

{
    let x = 200;
    {
        var x = 300;
    }
}

console.log(x);
