/**
 * Block scope also follows lexical scope
 */

let a = 20;

console.log(a); // 20

{
    let a = 100;
    console.log(a); // 100
    {
        let a = 200;
        console.log(a); // 200
    }
}
console.log(a); // 20
