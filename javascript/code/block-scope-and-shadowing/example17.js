/**
 * Block scope also follows lexical scope
 */

var a = 20;

console.log(a); // 20

{
    var a = 100;
    console.log(a); // 100
    {
        var a = 200;
        console.log(a); // 200
    }
}
console.log(a); // 200
