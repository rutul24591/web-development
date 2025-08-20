let b = 100; // b is alloted memory in different scope(Script) which is different from global(a) and block(c);
{
    /** b in block shadows global b, but only in the block. */
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}

console.log(b); // 100

// v Block
//    b : <value unavailable>
//    c : <value unavailable>

// v Global(Window)
//    GetParams : ƒ (e)
//    a : undefined
//    alert : ƒ alert()
//    atob : ƒ atob()

// v Script
//    b : 100
