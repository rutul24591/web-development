const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 resolve");
    }, 4000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2 resolved");
        // reject("Error in p2");
    }, 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P3 resolve");
    }, 2000);
});

Promise.all([p1, p2, p3])
    .then((result) => {
        console.log("result is", result);
    })
    .catch((error) => {
        console.log("ERROR ENCOUNTERED:", error);
    });

Promise.myPromise = function (promiseArr) {
    const array = [];
    let counter = 0;

    return new Promise((resolve, reject) => {
        promiseArr?.length > 0 &&
            promiseArr.forEach((promise, index) => {
                promise
                    .then((result) => {
                        counter++;
                        array[index] = result;
                        if (counter === promiseArr?.length) {
                            resolve(array);
                        }
                    })
                    .catch((error) => {
                        console.log("ERROR ENCOUNTERED");
                        reject(error);
                    });
            });
    });
};

Promise.myPromise([p1, p2, p3])
    .then((res) => {
        console.log("Res is", res);
    })
    .catch((err) => {
        console.log("Err is", err);
    });
