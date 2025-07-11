// This file is a separate module. All variables and functions declared within a module
// are private by default and cannot be directly accessed in other file.
// We need to explicitly export them from the module file and then only we will be able to access
// using module.exports {}

var x = "Hello";

function calculateSum(a, b) {
    console.log(a + b);
}

console.log(module.exports); // {}
//Below are all the same type of module exports
// module.exports.x=x;
// module.exports.calculateSum=calculateSum
// module.exports = { calculateSum }

module.exports = {
    x: x, // can simply write x here and it works as well
    calculateSum,
};

console.log(module.exports);
