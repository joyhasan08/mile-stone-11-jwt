// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-_QpbPIsFV3ZG7ysfoL7o4pT-b7Lm-Gc",
    authDomain: "car-shop-5bca4.firebaseapp.com",
    projectId: "car-shop-5bca4",
    storageBucket: "car-shop-5bca4.appspot.com",
    messagingSenderId: "532375680703",
    appId: "1:532375680703:web:4d40f823220a8f35b3b80a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth
