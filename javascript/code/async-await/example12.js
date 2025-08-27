// Need to review this example again

const API_URL = "https://api.github.com/users/rutul24591";

async function handlePromise() {
    // try {
    //     const data = await fetch(API_URL); // Suspends and wait
    //     const jsonValue = await data.json(); // Suspends and wait
    //     console.log("JSONVALUE: ", jsonValue);
    // } catch (error) {
    //     console.log("Error encountered", error);
    // }

    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
}

handlePromise()
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
