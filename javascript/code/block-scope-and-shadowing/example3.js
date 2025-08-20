{
    console.log(a); // undefined
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}

console.log(a); // 10. a is defined in global memory unlike b and c.
console.log(b); // Uncaught ReferenceError: b is not defined  No further execution
console.log(c);
