var a = 100;
{
    /** a in block, shadows global a and both references same object. */
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}

console.log(a); // 10. a is defined in global memory unlike b and c and references to gloabl a so 10
