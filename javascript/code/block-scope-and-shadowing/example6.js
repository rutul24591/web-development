const c = 100; // c is alloted memory in different scope(Script) which is different from global(a) and block(b);
{
    /** c in block shadows global c, but only in the block. */
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}

console.log(c); // 100. a is defined in global memory unlike b and c and references to gloabl a so 10

// Note: b in block and in global are different. Try debugging and check the scope

// v Block
//    b : <value unavailable>
//    c : <value unavailable>

// v Global(Window)
//    GetParams : ƒ (e)
//    a : undefined
//    alert : ƒ alert()
//    atob : ƒ atob()
//    b : 100
