/** a is hoisted in global memory scope.
 * b and c are also hoisted but in different memory scope(reserved for the block).
 * After last line of block is executed, these variables will not be accessible. block is removed from memory.
 */

{
    var a = 10;
    let b = 20;
    const c = 30;
}
