"use strict";
// 1. this in global space

// this in global space is window object
// i.e global object. JS can run inside browser, mobile phones nodeJs, IOT,
// there can be JS runtime environment that can be different.
// Global objects differ across env.
// globalObject in browser is window.
// globalObject in nodeJS is global.
console.log("this is global space: ", this);

// common between across all browser, node, etc is globalThis

// 2. this inside a function
function x() {
    // this keyword works different for strict mode and non strict mode
    // 1. Without strict mode the below this is the Window object
    // 2. "use strict" at top to make this strict mode(stricter rules), in which case below this would be undefined
    console.log("this in function space of x()", this);
}
x();

// 3. this in non-strict mode (this substitution)

// If the value of this keyword is undefined or null this keyword
// will be replaced with globalObject only in non-strict mode

// Inerview Que: What will be the value of this inside a function.
// Answer: It will be undefined for both strict and non strict mode, but for non strict mode,
// due to a concept called this substitution, this will be globalObject(i.e window)

// 4. this in strict mode is undefined(within function)

// 5. The value of this keyword depends on how this is called(window)
// UnComment strict mode for this example
// When you call x() without reference of an object it is undefined, but calling x() with window object it references to the calling object(i.e window)
x(); // this would be undefined
window.x(); // Window

// 6. this inside a object's method
// NOTE: If you make a function part of an object then is called a method.(ofcourse)
const obj = {
    a: 10,
    y: function () {
        // Method y
        console.log("this inside method y:", this);
        console.log(`this.a `, this.a);
    },
};

// The value of this would be the object where the method is present.
obj.y(); // {a: 10, y: f}    10

// 7. call apply bind methods(sharing methods. Used to share methods

const student = {
    fName: "Rutul",
    lName: "Amin",
    printName: function () {
        console.log(this.fName + " " + this.lName);
    },
};

student.printName();

const student2 = {
    fName: "John",
    lName: "Doe",
};

// How to use printName method of student with student2 ?

student.printName.call(student2); // The first argument of call is what this will point to. We want student2 to use printName, so this should point to student2. It will override the value of this of student.
student.printName.apply(student2);
const xyz = student.printName.bind(student2);
xyx();

// 8. How does this behave in arrow function.
// Arrow funtions don't provide their own `this` binding(so not available) so it retains the `this` value of its enclosing lexical context)

const obj3 = {
    a: 19,
    x: () => {
        // Inside arrow function it will have its enclosing lexical context i.e arrow function currently is in global space so global is its enclosing lexical context
        console.log("this in arrow function", this);
    },
};

obj3.x(); // Window

// 9. this keyword in nested arrow function
// Interview question output
const obj4 = {
    a: 19,
    x: function () {
        console.log("this in normal method of obj4", this); // obj4
        const y = () => {
            // Inside arrow function it will have its enclosing lexical context i.e arrow function currently is in scope of x so this would be obj4
            console.log("this in nested arrow function", this);
        };
        y();
    },
};

obj4.x();

// 10. this keyword inside DOM
// Check in index.html file

// <button onclick="alert(this)">Click Me</button> <!-- [object HTMLButtonElement] -->

// SO this here would be reference to HTMLELement.

// 11. this inside class, constructor
