# JAVASCRIPT

JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

JAVASCRIPT ARRAY METHODS:

## Array.Prototype.at()

The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

**SYNTAX:**

` at(index)`

**EXAMPLE:**

````const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"```
````

## Array.Prototype.concat()

The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

**SYNTAX:**

`concat()`

`concat(value1)`

`concat(value1, value2)`

`concat(value1, value2, /_ …, _/ valueN)`

**EXAMPLE:**

```const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"
```
