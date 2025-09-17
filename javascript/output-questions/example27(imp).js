/**
 * !!!
 * Q27. Prototype Override
 * 
 * Explanation:
 * 
 * p is linked to the original prototype at creation.
 * Changing Person.prototype after instantiation doesn’t affect existing objects.
 * So both calls use the first prototype method → "hi".
 */

function Person() {}
Person.prototype.sayHi = () => console.log("hi");

const p = new Person();
p.sayHi();

Person.prototype = { sayHi: () => console.log("hello") };
p.sayHi();


/**
 * Output:
 * 
 * hi
 * hi
 */