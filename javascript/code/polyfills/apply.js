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
    console.log("this in printFullName ", this);
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

printFullName.apply(name2, ["Fremont", "California", "USA"]);

// In JavaScript, ...args in a function definition refers to the rest parameter syntax.
// This syntax allows a function to accept an indefinite number of arguments as an array.
// We are already passing an array as second argument, so no spread on args would do.
// Polyfill
Function.prototype.myApply = function (obj = {}, args) {
    console.log("this in myApply", this);
    console.log("args in myApply", args);

    if (typeof this !== "function") throw new Error("Not callable");
    if (!Array.isArray(args)) throw new Error("Arguments should be an array");

    console.log("obj in myApply:", obj);

    obj.fn = this;
    console.log("Obj aft in myApply", obj);
    obj.fn(...args);

    delete obj.fn;
};

// Call
printFullName.myApply(name, ["Ahmedabad", "Gujarat", "India"]);
