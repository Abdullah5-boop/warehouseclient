// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASQAr5FQfOSCvLP8gmAMfRXJBuwrC0Alo",
    authDomain: "warehouse-2094c.firebaseapp.com",
    projectId: "warehouse-2094c",
    storageBucket: "warehouse-2094c.appspot.com",
    messagingSenderId: "994053739284",
    appId: "1:994053739284:web:da6c298a31cbff42f62801",
    measurementId: "G-5Y5SGKZDSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
export default auth;