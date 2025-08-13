let name = {
    firstName: "Rutul",
    lastName: "Amin",
    // Below function is called a method.
    // Every function like below has access to this keyword which points to the object where it is defined.
    printFullName: function () {
        // `this` over here would be name object
        console.log(this.firstName + " " + this.lastName);
        // console.log(this.firstName + " " + this.lastName + " from " + city);
    },
};

// Invoke the printFullName method
name.printFullName(); // Rutul Amin

let name2 = {
    firstName: "Elon",
    lastName: "Musk",
    // Suppose we need to have a printFullName here, we can copy from name object, but it is not a good way.
    // Call method comes into picture.
    // printFullName: function () {
    //     console.log(this.firstName + " " + this.lastName);
    // },
};

// !!! Using call method we can borrow the `printFullName` method from name object into name2 object.
// !!! This concept is known as `function borrowing`.
// !!! With function borrowing, we can borrow functions from one object(name here) and use it on data of some other object(name2).

/** Call method
  The call() method of Function instances calls this function with a given `this` value and arguments provided individually.
  
  Signature

    call(thisArg)
    call(thisArg, arg1)
    call(thisArg, arg1, arg2)
    call(thisArg, arg1, arg2, ..., argN)

  Parameters
    thisArg:  The value to use as this when calling func. 
              If the function is not in strict mode, 
              null and undefined will be replaced with the global object, 
              and primitive values will be converted to objects
    arg1, arg2, ..., argN: Arguments for the function

  Returns
    The result of calling the function with the specified this value and arguments.

*/

// we want to call printFullName method of name object with name2, so here name2 becomes thisArg
name.printFullName.call(name2);

// Generally we don't attach a method like we did in name. Check call2
