// Error handling example. Changes users to usesr and try
const API_URL = "https://api.github.com/users/rutul24591";

async function fetchUserData() {
    try {
        const data = await fetch(API_URL); // Suspends and wait
        const jsonValue = await data.json(); // Suspends and wait
        console.log("JSONVALUE: ", jsonValue);
    } catch (error) {
        console.log("Error encountered", error);
    }
}

fetchUserData();
