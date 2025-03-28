# JavaScript Array Methods Cheat Sheet

## 1. Mutator Methods (Modify Original Array)

### `push()` - Adds elements to the end
```js
arr.push(element);
```
Example:
```js
let arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
```

### `pop()` - Removes last element
```js
arr.pop();
```
Example:
```js
let arr = [1, 2, 3];
arr.pop(); // [1, 2]
```

### `shift()` - Removes first element
```js
arr.shift();
```
Example:
```js
let arr = [1, 2, 3];
arr.shift(); // [2, 3]
```

### `unshift()` - Adds elements to the beginning
```js
arr.unshift(element);
```
Example:
```js
let arr = [1, 2, 3];
arr.unshift(0); // [0, 1, 2, 3]
```

### `splice()` - Adds/removes elements at a specific index
```js
arr.splice(index, deleteCount, item1, item2, ...);
```
Example:
```js
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1); // [1, 2, 4, 5]
```

### `sort()` - Sorts elements
```js
arr.sort(compareFunction);
```
Example:
```js
let arr = [3, 1, 4, 2];
arr.sort((a, b) => a - b); // [1, 2, 3, 4]
```

### `reverse()` - Reverses elements
```js
arr.reverse();
```
Example:
```js
let arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1]
```

---

## 2. Accessor Methods (Return a new value, do not modify original array)

### `concat()` - Merges arrays
```js
arr.concat(arr2, arr3);
```
Example:
```js
[1, 2].concat([3, 4]); // [1, 2, 3, 4]
```

### `slice()` - Extracts a section
```js
arr.slice(start, end);
```
Example:
```js
[1, 2, 3, 4].slice(1, 3); // [2, 3]
```

### `includes()` - Checks if an element exists
```js
arr.includes(value);
```
Example:
```js
[1, 2, 3].includes(2); // true
```

---

## 3. Iteration Methods

### `forEach()` - Loops through array
```js
arr.forEach(callback);
```
Example:
```js
[1, 2, 3].forEach(num => console.log(num * 2));
```

### `map()` - Creates a new array by applying a function
```js
arr.map(callback);
```
Example:
```js
[1, 2, 3].map(num => num * 2); // [2, 4, 6]
```

### `filter()` - Returns elements that match a condition
```js
arr.filter(callback);
```
Example:
```js
[1, 2, 3, 4].filter(num => num > 2); // [3, 4]
```

### `find()` - Returns the first matching element
```js
arr.find(callback);
```
Example:
```js
[5, 10, 15].find(num => num > 8); // 10
```

### `findIndex()` - Returns index of first matching element
```js
arr.findIndex(callback);
```
Example:
```js
[5, 10, 15].findIndex(num => num > 8); // 1
```

### `every()` - Checks if all elements match a condition
```js
arr.every(callback);
```
Example:
```js
[2, 4, 6].every(num => num % 2 === 0); // true
```

### `some()` - Checks if at least one element matches a condition
```js
arr.some(callback);
```
Example:
```js
[1, 2, 3].some(num => num > 2); // true
```

### `reduce()` - Reduces array to a single value
```js
arr.reduce(callback, initialValue);
```
Example:
```js
[1, 2, 3, 4].reduce((sum, num) => sum + num, 0); // 10
```

---

## 4. Copying and Checking Methods

### `indexOf()` - Finds the index of an element
```js
arr.indexOf(value);
```
Example:
```js
[10, 20, 30].indexOf(20); // 1
```

### `lastIndexOf()` - Finds the last index of an element
```js
arr.lastIndexOf(value);
```
Example:
```js
[10, 20, 30, 20].lastIndexOf(20); // 3
```

### `fill()` - Fills the array with a static value
```js
arr.fill(value, start, end);
```
Example:
```js
[1, 2, 3, 4].fill(9, 1, 3); // [1, 9, 9, 4]
```

### `isArray()` - Checks if a value is an array
```js
Array.isArray(value);
```
Example:
```js
Array.isArray([1, 2, 3]); // true
```

---

## 5. Typed Array Methods

### `from()` - Creates an array from an iterable
```js
Array.from(iterable, mapFn);
```
Example:
```js
Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']
```

### `of()` - Creates an array from arguments
```js
Array.of(element1, element2, ...);
```
Example:
```js
Array.of(1, 2, 3); // [1, 2, 3]
```

### `copyWithin()` - Copies part of the array within itself
```js
arr.copyWithin(target, start, end);
```
Example:
```js
[1, 2, 3, 4, 5].copyWithin(2, 0, 2); // [1, 2, 1, 2, 5]
```

---

This cheat sheet covers **all JavaScript array methods** with examples! 🚀
