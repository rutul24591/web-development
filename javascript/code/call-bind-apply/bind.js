/**
 * Bind method is similar to call, but it doesn't call the method, instead it binds the method on the provided object
 * and returns
 * 
 * The bind() method of Function instances creates a new function that, when called, 
 * calls this function with its `this` keyword set to the provided value, 
 * and a given sequence of arguments preceding any provided when the new function is called.
 * 
 * Signature

    bind(thisArg)
    bind(thisArg, arg1)
    bind(thisArg, arg1, arg2)
    bind(thisArg, arg1, arg2, ..., argN)

  Parameters
    thisArg: The value to be passed as the this parameter to the target function func when the bound function is called
    arg1, arg2, ..., argN - Arguments to prepend to arguments provided to the bound function when invoking func.

 * 
 */

let name = {
    firstName: "Rutul",
    lastName: "Amin",
};

let name2 = {
    firstName: "Elon",
    lastName: "Musk",
};

let printFullName = function (city, state, country) {
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

let printMyName = printFullName.bind(name2, "Fremont", "California", "USA");

// It will only print the method and doesn't call itself and just provides the copy of the method which can be invoked later.
console.log(printMyName);

printMyName();
