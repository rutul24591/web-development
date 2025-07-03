function* generatorFunc() {
    yield 1;
    yield 2;
    yield 4;

    return "done";
}

// Using the generator
const gen = generatorFunc();

console.log(gen.next().value); // 1
const b = gen.next();

console.log(b.value); // 2

console.log(gen.next().value); // 4

console.log(gen.next().value); // done
console.log(gen.next().value); // undefined
