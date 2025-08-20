/**
 * Block scope also follows lexical scope
 */

const a = 20;

console.log(a); // 20

{
    const a = 100;
    console.log(a); // 100
    {
        const a = 200;
        console.log(a); // 200
    }
}
console.log(a); // 20
