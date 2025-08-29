# JavaScript Closures Interview Questions

## Questions and Answers

### 1. What is a closure in JavaScript?

A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. In other words, a closure gives you access to an outer function's scope from an inner function.

**Example:**
```javascript
function outerFunction() {
    let outerVariable = "I'm from outer scope";
    
    function innerFunction() {
        console.log(outerVariable); // Can access outerVariable
    }
    
    return innerFunction;
}

const closure = outerFunction();
closure(); // Outputs: "I'm from outer scope"
```

### 2. What are the main benefits of closures?

1. **Data Privacy**: Closures can be used to create private variables and methods
2. **State Management**: They help maintain state between function calls
3. **Module Pattern**: Enable the creation of modules with private and public APIs
4. **Currying**: Support functional programming patterns like currying

**Example of Data Privacy:**
```javascript
function createCounter() {
    let count = 0; // Private variable
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
console.log(counter.count);       // undefined (private)
```

### 3. What is the difference between a closure and a scope?

- **Scope**: Defines the visibility and lifetime of variables and functions
- **Closure**: Is a function that remembers and can access variables from its outer scope even after the outer function has returned

**Example:**
```javascript
// Scope example
function scopeExample() {
    let x = 10;
    console.log(x); // 10
}
// console.log(x); // ReferenceError: x is not defined

// Closure example
function closureExample() {
    let x = 10;
    return function() {
        console.log(x); // Still has access to x
    };
}
const closure = closureExample();
closure(); // 10
```

### 4. What is the closure scope chain?

The closure scope chain consists of:
1. Its own scope (variables defined between its curly braces)
2. Outer function's scope
3. Global scope

**Example:**
```javascript
const globalVar = "I'm global";

function outer() {
    const outerVar = "I'm outer";
    
    function inner() {
        const innerVar = "I'm inner";
        console.log(innerVar);  // Own scope
        console.log(outerVar);  // Outer scope
        console.log(globalVar); // Global scope
    }
    
    return inner;
}

const closure = outer();
closure();
```

### 5. What are common use cases for closures?

1. **Event Handlers**
```javascript
function createButtonHandler(buttonId) {
    return function() {
        console.log(`Button ${buttonId} was clicked!`);
    };
}

const button1Handler = createButtonHandler(1);
const button2Handler = createButtonHandler(2);
```

2. **Function Factories**
```javascript
function multiply(x) {
    return function(y) {
        return x * y;
    };
}

const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(4)); // 8
```

3. **Module Pattern**
```javascript
const calculator = (function() {
    let result = 0;
    
    return {
        add: function(x) {
            result += x;
            return result;
        },
        subtract: function(x) {
            result -= x;
            return result;
        },
        getResult: function() {
            return result;
        }
    };
})();
```

### 6. What are the potential issues with closures?

1. **Memory Leaks**: Closures can cause memory leaks if not used carefully
2. **Performance**: Overuse of closures can impact performance
3. **Debugging**: Can make debugging more complex

**Example of Memory Leak:**
```javascript
function createHeavyClosure() {
    const largeArray = new Array(1000000).fill('data');
    
    return function() {
        console.log(largeArray.length);
    };
}

// This closure keeps the largeArray in memory
const closure = createHeavyClosure();
```

### 7. How do you prevent memory leaks with closures?

1. **Explicitly null references**
2. **Use WeakMap/WeakSet**
3. **Avoid unnecessary closures**

**Example:**
```javascript
function createClosure() {
    const data = new Array(1000000).fill('data');
    
    return function() {
        console.log(data.length);
    };
}

const closure = createClosure();
// When done
closure = null; // Help garbage collection
```

### 8. What is the relationship between closures and garbage collection?

Closures can prevent garbage collection of variables in their scope chain. The JavaScript engine keeps variables in memory as long as there are references to them through closures.

**Example:**
```javascript
function createClosure() {
    const largeData = new Array(1000000).fill('data');
    
    return function() {
        console.log(largeData[0]);
    };
}

const closure = createClosure();
// largeData won't be garbage collected as long as closure exists
```

### 9. How do closures work with async operations?

Closures can be particularly useful with async operations to maintain state and context.

**Example:**
```javascript
function createAsyncCounter() {
    let count = 0;
    
    return {
        increment: async function() {
            await new Promise(resolve => setTimeout(resolve, 1000));
            count++;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createAsyncCounter();
counter.increment().then(count => console.log(count)); // 1
```

### 10. What is the difference between a closure and a class?

While both can be used for encapsulation, they have different characteristics:

**Closure Example:**
```javascript
function createPerson(name) {
    let age = 0;
    
    return {
        getName: () => name,
        getAge: () => age,
        setAge: (newAge) => age = newAge
    };
}

const person = createPerson("John");
```

**Class Example:**
```javascript
class Person {
    constructor(name) {
        this.name = name;
        this.age = 0;
    }
    
    getName() {
        return this.name;
    }
    
    getAge() {
        return this.age;
    }
    
    setAge(newAge) {
        this.age = newAge;
    }
}

const person = new Person("John");
```

### 11. How do closures work with the `this` keyword?

Closures can sometimes cause issues with the `this` keyword because they don't bind their own `this`.

**Example:**
```javascript
const obj = {
    name: "Object",
    method: function() {
        return function() {
            console.log(this.name); // undefined
        };
    }
};

const closure = obj.method();
closure(); // undefined

// Fix using arrow function or bind
const obj2 = {
    name: "Object",
    method: function() {
        return () => {
            console.log(this.name); // "Object"
        };
    }
};

const closure2 = obj2.method();
closure2(); // "Object"
```

### 12. What is the module pattern and how does it use closures?

The module pattern uses closures to create private and public members.

**Example:**
```javascript
const module = (function() {
    // Private variables and functions
    let privateVar = "private";
    
    function privateFunction() {
        console.log(privateVar);
    }
    
    // Public API
    return {
        publicVar: "public",
        publicFunction: function() {
            privateFunction();
        }
    };
})();

console.log(module.publicVar);     // "public"
module.publicFunction();          // "private"
console.log(module.privateVar);    // undefined
```

### 13. How do closures work with loops?

Closures in loops can sometimes lead to unexpected behavior due to the way they capture variables.

**Common Issue:**
```javascript
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i); // All print 5
    }, 1000);
}

// Fix using let or IIFE
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i); // Prints 0,1,2,3,4
    }, 1000);
}
```

### 14. What is the relationship between closures and recursion?

Closures can be used effectively with recursion to maintain state between recursive calls.

**Example:**
```javascript
function createRecursiveCounter() {
    let count = 0;
    
    function recursiveFunction(n) {
        if (n <= 0) return count;
        count++;
        return recursiveFunction(n - 1);
    }
    
    return recursiveFunction;
}

const counter = createRecursiveCounter();
console.log(counter(5)); // 5
```

### 15. How do closures work with event listeners?

Closures are commonly used with event listeners to maintain state and context.

**Example:**
```javascript
function createButtonCounter() {
    let count = 0;
    
    return function() {
        count++;
        console.log(`Button clicked ${count} times`);
    };
}

const button = document.createElement('button');
button.textContent = 'Click me';
button.addEventListener('click', createButtonCounter());
document.body.appendChild(button);
```
