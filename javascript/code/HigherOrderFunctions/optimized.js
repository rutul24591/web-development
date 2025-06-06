const radius = [3, 1, 2, 4];

// Pure function is a function that does not depend on any external state.
// Here area, circumference and diameter are pure functions.

// We have abstracted the logic of calculating the area, circumference and diameter.
// We can now use this logic to calculate the area, circumference and diameter of any radius.
// Each function has a single responsibility.
// This is the power of higher order functions.

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

const calculate = function (radius, formula){
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(formula(radius[i]));
    }
    return output;
}


// Map is also a higher order function which takes a function as an argument.
// Our calculate function is a custom map function. Granted map will have more features than our custom map function.

// console.log(radius.map(area));
// console.log(radius.map(circumference));
// console.log(radius.map(diameter));


// This way we can add a method to the Array prototype.
// This way we can use the calculate function on any array just like map i.e radius.calculate(area);
// calculate is like a polyfill for map.

// Array.prototype.calculate = function (formula){
//     const output = [];
//     for (let i = 0; i < radius.length; i++) //                   ( <--- ) It will work as we are doing radius.calculate.  Replace radius with this, it will work as well.
//         output.push(formula(radius[i]));
//     }
//     return output;
// }

// Question we are just passing area now, so in the function method what is the radius that is iterated? (Look for this <---)
console.log(radius.calculate(area));


console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));
