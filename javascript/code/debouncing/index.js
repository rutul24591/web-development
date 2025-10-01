// Debouncing in Javascript
// 1. Debouncing ensures that a function is only executed after a specified period
// of inactivity following its last invocation
// 2. Used for performance optimization

let counter = 0;
const getData = () => {
    // Calls API and gets Data;
    console.log("FETCHING DATA", counter++);
};

// Debouncing
const debounce = function (fn, delay) {
    let timer;
    return function (...args) {
        let context = this;

        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
};

// function debounce(func, delay) {
//     let timeout;
//     return function (...args) {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => {
//             func.apply(this, args);
//         }, delay);
//     };
// }

// doSomething if the time between keystrokes is greater than 3 ms
const betterFunction = debounce(getData, 300);

// When we type in input box,
// the betterFunction is called with each and every keypressevent which will call the doSomething function
// which will return us a function which does some processing. In that after 300 ms the getData method is called.
// We will have to come up with a strategy to clear this timeout or timer whenever a new function call is made. Eg
// Suppose a new function call is made and 300ms is still not yet passed

// Simulate typing with multiple calls to the debounced function
// betterFunction('Hello');
// betterFunction('Hello, ');
// betterFunction('Hello, World!');
