const arr = [
    1,
    2,
    [34, [23, 86, [1, 4, 99]], 78],
    4,
    5,
    [9, 10, 18],
    5,
    6,
    [42, 97],
    7,
];

const result = arr.flat(3);

console.log("Result: ", result);

Array.prototype.myFlatten = function (depth) {
    if (!Array.isArray(this)) throw new Error("Argument is not an Array");

    let res = [];

    this.forEach((element) => {
        if (Array.isArray(element) && depth > 0) {
            res.push(...element.myFlatten(depth - 1));
        } else {
            res.push(el);
        }
    });

    return res;
};

const result1 = arr.flat(3);

console.log("Result1: ", result1);
console.log(Object.prototype);
console.log(Object.__proto__);
console.log(Array.prototype);
console.log(Array.__proto__);
console.log(Array.prototype.myFlatten === Array.prototype.map);
console.log(Array.prototype.__proto__ === Object.prototype);
console.log(arr.__proto__ === Array.prototype);
