/**
 * Use this for implementation reference. Bind is bit tricky
 */

const name = {
    firstName: "Rutul",
    lastName: "Amin",
};

const name2 = {
    firstName: "Dolund",
    lastName: "Trump",
};

let printName = function (hometown, state, country) {
    console.log(
        this.firstName +
            " " +
            this.lastName +
            " from " +
            hometown +
            " " +
            state +
            " " +
            country
    );
};

// let bindedMethod = printName.bind(name2, "Fremont", "California", "USA");
// bindedMethod();

/** Polyfill */

Function.prototype.myBind = function (obj = {}, ...args) {
    console.log("this: ", this);
    console.log("obj: ", obj);
    console.log(...args);

    if (typeof this !== "function") throw new Error("Not Bindable");

    obj.fn = this;
    return function (...args2) {
        console.log("args2:", ...args2);
        obj.fn(...args, ...args2);
    };
};

const bindMethod = printName.myBind(name, "Ahmedabad", "Gujarat", "India");
bindMethod();

/** Other exmaple */

let multiply = function (x, y) {
    console.log("Multiply Result:", x * y);
};

const multiplyBy2 = multiply.myBind(this, 2);
multiplyBy2(5);
