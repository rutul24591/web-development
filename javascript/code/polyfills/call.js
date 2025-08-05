/** !!! REMEMBER: call, bind and apply is on Function and not on Array */
let name = {
    firstName: "Rutul",
    lastName: "Amin",
};

let name2 = {
    firstName: "Elon",
    lastName: "Musk",
};

let printFullName = function (city, state, country) {
    console.log("this in printFullName", this);
    console.log(
        this.firstName +
            " " +
            this.lastName +
            " from " +
            city +
            " in " +
            state +
            ", " +
            country
    );
};

// Actual call method
printFullName.call(name2, "Fremont", "California", "USA");

// In JavaScript, ...args in a function definition refers to the rest parameter syntax.
// This syntax allows a function to accept an indefinite number of arguments as an array

// Polyfill
Function.prototype.myCallFn = function (obj = {}, ...args) {
    console.log("ARGS >>>>", args);
    console.log("this is", this);

    if (typeof this !== "function") throw new Error("Not callable");

    console.log("Obj is", obj);
    obj.fn = this;

    console.log("Obj aft", obj);
    obj.fn(...args);

    delete obj.fn; // Check this if needed
};

printFullName.myCallFn(name, "Ahmedabad", "Gujarat", "India");
