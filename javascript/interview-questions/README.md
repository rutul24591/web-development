# JavaScript Interview Questions

JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

## Questions and Answers

### 1. What is the difference between `==` and `===` in JavaScript?

The main difference between the `==` and `===` operator in JavaScript is that the `==` operator does the type conversion of the operands before comparison, whereas the `===` operator compares the values as well as the data types of the operands.

### 2. Which one is faster between `==` and `===` in JavaScript?

`===` compares if the values and the types are the same. `==` compares if the values are the same, but it also does type conversions in the comparison. Those type conversions make `==` slower than `===`.

### 3. What are the different types in JavaScript?

- string
- number
- object
- boolean
- function
- null
- undefined
- symbol

### 4. What is the use of `typeof` in JavaScript?

`typeof` is used to know the types of variable in JavaScript.

**Example:**
```javascript
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"
```

### 5. What is hoisting in JavaScript?

In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

The following is the sequence in which variable declaration and initialization occur:
```
Declaration –> Initialisation/Assignment –> Usage
```

**Example:**
```javascript
// hoisting
function codeHoist() {
    a = 10;
    let b = 50;
}
codeHoist();

console.log(a); // 10
console.log(b); // ReferenceError : b is not defined
```

**Note:** JavaScript only hoists declarations, not the initializations.

### 6. What is event bubbling?

Event bubbling is a method of event propagation in the HTML DOM API when an event is in an element inside another element, and both elements have registered a handle to that event. It is a process that starts with the element that triggered the event and then bubbles up to the containing elements in the hierarchy. In event bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Bubbling Event in JavaScript</title>
</head>
<body>
    <h2>Bubbling Event in JavaScript</h2>
    <div id="parent">
        <button>
            <h2>Parent</h2>
        </button>
        <button id="child">
            <p>Child</p>
        </button>
    </div>

    <script>
        document.getElementById("child").addEventListener("click", function () {
            alert("You clicked the Child element!");
        }, false);

        document.getElementById("parent").addEventListener("click", function () {
            alert("You clicked the parent element!");
        }, false);
    </script>
</body>
</html>
```

### 7. Explain variable scope in JavaScript?

The scope manages the availability of variables or we can also say that it determines the accessibility of variables.

**Types of Scopes in JavaScript:**
- Block scope
- Function scope
- Local scope
- Global scope

### 8. What is the difference between `let`, `const` and `var` in JavaScript?

- **`let`**: Used to define a variable whose values can be changed. `let` has block scope. So it cannot be accessible outside the block it has been defined.
- **`const`**: Used to define a variable whose value remains constant throughout the length of program. `const` has block scope. So it cannot be accessible outside the block it has been defined.
- **`var`**: Variables declared with the `var` keyword cannot have block scope (instead they have function scope) and they can be declared inside a { } block and can be accessed from outside the block.

If a variable is simply declared without `let`, `const` or `var` they are treated as of global scope.

### 9. What are callbacks?

Just like almost everything in JavaScript (except primitive data types), functions are an object type. So like any other object types, functions can be passed to other functions.

When a function is passed as an argument, it is called a **callback function**. This **callback function** can be **invoked** inside the function calling it at any point, especially when some routine or action has been completed. They are basically functions which are executed only after some value has been produced.

**Example:**
```javascript
// Main function
const mainFunction = (callback) => {
    setTimeout(() => {
        callback([2, 3, 4]);
    }, 2000)
}

// Add function
const add = (array) => {
    let sum = 0;
    for(let i of array) {
        sum += i;
    }
    console.log(sum);
}

// Calling main function
mainFunction(add);
```

**Output:** 9

**Explanation:** Here we have used setTimeout in the mainFunction to mimic some I/O Operations or a request call. The callback function passed is used to sum up the elements of the array. After 2 seconds have passed, the sum of the array is printed which is 9.

### 10. Explain the concept of callback hell?

**Callback Hell** is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code.

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Callback Hell</title>
    <style>
        * {
            padding: none;
            margin: none;
            box-sizing: border-box;
        }
        .word {
            color: #308d46;
            font-size: 4rem;
            transition: all .5s ease-in;
            margin: 0 5px;
            transform: translateY(3.8rem);
            opacity: 0;
        }
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 95vw;
            height: 95vh;
        }
        .container {
            overflow: hidden;
            display: flex;
            flex-direction: row;
        }
        .animate {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body>
    <div class="container">
        <h2 class="word">Geeks</h2>
        <h2 class="word">For</h2>
        <h2 class="word">Geeks</h2>
    </div>
    <script>
        let words = document.querySelectorAll(".word");

        const animateAll = (animate) => {
            setTimeout(() => {
                animate(words[0]);
                setTimeout(() => {
                    animate(words[1]);
                    setTimeout(() => {
                        animate(words[2]);
                    }, 1000)
                }, 1000)
            }, 1000)
        }

        const animate = (word) => {
            word.classList.add("animate");
        }

        animateAll(animate);
    </script>
</body>
</html>
```

### 11. What are promises? List the advantages?

### 12. What are function generators in JavaScript?

**Generator-Function:** A generator-function is defined like a normal function, but whenever it needs to generate a value, it does so with the yield keyword rather than return. The yield statement suspends function's execution and sends a value back to caller, but retains enough state to enable function to resume where it is left off. When resumed, the function continues execution immediately after the last yield run.

**Syntax:**
```javascript
// An example of generator function
function* gen() {
    yield 1;
    yield 2;
    // ...
}
```

**Generator-Object:** Generator functions return a generator object. Generator objects are used either by calling the next method on the generator object or using the generator object in a "for of" loop. The Generator object is returned by a generating function and it conforms to both the iterable protocol and the iterator protocol.

**Example:**
```javascript
// Generate Function generates three different numbers
function* fun() {
    yield 10;
    yield 20;
    yield 30;
}

// Calling the Generate Function
var gen = fun();
gen.next().value;
gen.next().value;
gen.next().value;

// OR Using for loop to generate value
for (var i = 0; i < 10; i++) {
    // Generating Next Number
    gen.next().value;
    // New Line
    document.write("<br>");
}
```

### 13. What is the difference between `call`, `bind` and `apply` in JavaScript?

### 14. What are closures in JavaScript?

### 15. Is JavaScript a statically typed or a dynamically typed language?

### 16. What is NaN property in JavaScript?

### 17. Explain passed by value and passed by reference.

### 18. How to invoke a function immediately?

### 19. What are higher order functions in JavaScript?

### 20. What is currying in JavaScript?

### 21. What are object prototypes in JavaScript?

### 22. What is an arrow function?

### 23. Explain some differences between ES5 and ES6?

### 24. What is rest `(...)` operator in JavaScript do?

Rest Operator provides an improved way of handling the parameters of a function. Using the rest parameter syntax `...`, we can create functions that can take a variable number of arguments. Any number of arguments will be converted into an array using the rest parameter.

**Example:**
```javascript
function extractingArgs(...args) {
    return args[1];
}
// extractingArgs(8,9,1); // Returns 9

function addAllArgs(...args) {
    let sumOfArgs = 0;
    let i = 0;
    while(i < args.length) {
        sumOfArgs += args[i];
        i++;
    }
    return sumOfArgs;
}
addAllArgs(6, 5, 7, 99); // Returns 117
addAllArgs(1, 3, 4); // Returns 8
```

**Note:** Rest parameter should always be used at the last parameter of a function.

### 25. What is spread operator `(...)` in JavaScript?

The spread operator is used to spreading an array, and object literals. We also use spread operators where one or more arguments are expected in a function call.

**Example:**
```javascript
let array1 = [3, 4, 5, 6];
// Spreads the array into 3,4,5,6
let clonedArray1 = [...array1];
console.log(clonedArray1); // Outputs [3,4,5,6]
```

### 26. What is temporal dead zone?

Temporal Dead Zone is a behavior that occurs with variables declared using let and const keywords. It is a behavior where we try to access a variable before it is initialized.

**Example:**
```javascript
x = 23; // Gives reference error
let x;

function anotherRandomFunc() {
    message = "Hello"; // Throws a reference error
    let message;
}
anotherRandomFunc();
```

### 27. How to destructure in JavaScript?

Object destructuring is a new way to extract elements from an object or an array.

**Object destructuring: Before ES6 version:**
```javascript
const classDetails = {
    strength: 78,
    benches: 39,
    blackBoard: 1
}

const classStrength = classDetails.strength;
const classBenches = classDetails.benches;
const classBlackBoard = classDetails.blackBoard;
```

**Using object destructuring:**
```javascript
const classDetails = {
    strength: 78,
    benches: 39,
    blackBoard: 1
}
const {strength, benches, blackBoard} = classDetails;

// OR
const {
    strength: classStrength,
    benches: classBenches,
    blackBoard: classBlackBoard
} = classDetails;
```

### 28. Is JavaScript `pass-by-value` or `pass-by-reference`?

JavaScript is always pass-by-value. This means everything in JavaScript is a value type and function arguments are always passed by value. That being said, object types are a bit more confusing. The confusion lies in the fact that object types are reference types which are passed by value.

### 29. Explain JavaScript Array prototype constructor?

The JavaScript array prototype constructor is used to allow to add new methods and properties to the Array() object. If the method is constructed, then it will available for every array. When constructing a property, all arrays will be given the property, and its value, as default.

**Syntax:**
```javascript
Array.prototype.name = value
```

**Example 1:** This example use JavaScript array prototype constructor and convert string character into upper case character.
```javascript
Array.prototype.upperCase = function() {
    var i;
    for (i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
};

function myGeeks() {
    var sub = ["Algorithm", "Data Structure", "Operating System", "html"];
    sub.upperCase();
    document.getElementById("GFG").innerHTML = sub;
}
```

**Example 2:** This example use JavaScript array prototype constructor to count string length.
```javascript
Array.prototype.stringLength = function() {
    var i;
    for (i = 0; i < this.length; i++) {
        this[i] = this[i].length;
    }
};

function lengthFunction() {
    // Declare an array
    var str = ["GeeksforGeeks", "GFG", "myGeeks"];
    str.stringLength();
    document.getElementById("GFG").innerHTML = str;
}
```

### 30. How to create a matrix in JavaScript?

Using the fill property we can create a matrix in JavaScript.
```javascript
function array9() {
    return Array(9).fill();
}
const arr = array9().map(array9);

console.log('Arr: ', arr); // Would print a matrix with undefined values
arr[1][2] = 4444; // would fill 4444 to arr[1] position 2.
```

### 31. What will the following code output, and why?

```javascript
const obj = {
    a: 10,
    b: function () {
        console.log(this.a);
        const inner = () => {
            console.log(this.a);
        };
        inner();
    },
};

const b = obj.b;
b(); // Output?
obj.b(); // Output?
```

**Answer:**

Let's analyze both function calls:

1. **`b()`**:
   - `b` is assigned the reference of `obj.b`
   - When invoked as `b()`, the function is called in the global context
   - In non-strict mode, `this` inside `b` refers to the global object (window in browsers, or global in Node.js)
   - In strict mode, `this` is `undefined`
   - The first `console.log(this.a)` will try to access `a` on the global object
   - Since there is no global `a`, it logs `undefined`
   - The arrow function `inner` does not redefine `this`
   - It uses the `this` of its enclosing context, which is still the global object (or `undefined` in strict mode)
   - The second `console.log(this.a)` also logs `undefined`
   - **Output:** `undefined` `undefined`

2. **`obj.b()`**:
   - When `obj.b()` is called, `this` inside `b` refers to `obj`
   - The first `console.log(this.a)` logs `10` because `this.a` points to `obj.a`
   - The arrow function `inner` uses the `this` of its enclosing context, which is still `obj`
   - The second `console.log(this.a)` also logs `10`
   - **Output:** `10` `10`

**Key Points:**
- Arrow functions inherit the `this` binding from their enclosing context
- Regular functions have their own `this` binding based on how they are called
- When a method is extracted from an object and called as a function, it loses its `this` binding to the object

	
