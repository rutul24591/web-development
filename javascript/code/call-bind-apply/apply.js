/**
 * 
 * The only difference between call and apply methods is the arguments in call are comma separated
 * but in apply we pass the arguments as an array.
 * 
 * The apply() method of Function instances 
 * calls `this function with a given `this` value, 
 * and arguments provided as an array (or an array-like object).
 * 
 * Signature

    apply(thisArg)
    apply(thisArg, argsArray)

  Parameters
    thisArg:  The value to use as this when calling func. 
              If the function is not in strict mode, 
              null and undefined will be replaced with the global object, 
              and primitive values will be converted to objects
    argsArray: An array-like object, specifying the arguments with which func should be called

  Returns
    The result of calling the function with the specified this value and arguments.
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

printFullName.apply(name, ["Ahmedabad", "Gujarat", "India"]);
printFullName.apply(name2, ["Fremont", "California", "USA"]);
