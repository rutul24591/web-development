/**
 * Implement a genearator function that receives an arbitrary no of promises
 * then,
 * if resove yield return value
 * if reject yields -1 and stops yielding further
 *
 * Interview: UBS -> Hackerrank Round 1
 *
 */

async function* generatorFunction(...promises) {
    for (const promise of promises) {
        try {
            const value = await promise;
            yield value;
        } catch (error) {
            yield -1;
            return;
        }
    }
}

const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.reject(new Error("Error")),
    Promise.resolve(3),
];

const generator = generatorFunction(...promises);

generator.next().then((value) => {
    console.log(value);
});

generator.next().then((value) => {
    console.log(value);
});

generator.next().then((value) => {
    console.log(value);
});

generator.next().then((value) => {
    console.log(value);
});
