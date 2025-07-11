// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHMHmRxC9a_-2VV6dHxXvy5W_t9llHAPs",
    authDomain: "netflix-81b1f.firebaseapp.com",
    projectId: "netflix-81b1f",
    storageBucket: "netflix-81b1f.firebasestorage.app",
    messagingSenderId: "594056481428",
    appId: "1:594056481428:web:b491ea59cc7adb0cea8281",
    measurementId: "G-N581L6LLC5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
