// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCy8tv-tdKKn6fwerE2orHbmp8PCkob45A",
    authDomain: "tarkovfast.firebaseapp.com",
    projectId: "tarkovfast",
    storageBucket: "tarkovfast.appspot.com",
    messagingSenderId: "189547408052",
    appId: "1:189547408052:web:271e454205104be76485e1"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase