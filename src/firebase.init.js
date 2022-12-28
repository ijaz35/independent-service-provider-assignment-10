// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFofjtyYJpmbv5MoLSW0yIE7_6C7N0pDs",
    authDomain: "independent-service-63-ass-10.firebaseapp.com",
    projectId: "independent-service-63-ass-10",
    storageBucket: "independent-service-63-ass-10.appspot.com",
    messagingSenderId: "409325887287",
    appId: "1:409325887287:web:79789469f2343f369144b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;