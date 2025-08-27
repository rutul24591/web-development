const API_URL = "https://api.github.com/users/rutul24591";

async function fetchUserData() {
    const data = await fetch(API_URL); // Suspends and wait
    const jsonValue = await data.json(); // Suspends and wait

    console.log("JSONVALUE: ", jsonValue);
}

fetchUserData();
