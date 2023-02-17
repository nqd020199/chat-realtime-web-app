// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDCV5OORfr7uCm1Mx6NTCra30fsCGUN2I",
    authDomain: "chat-realtime-applicatio-ed8d3.firebaseapp.com",
    projectId: "chat-realtime-applicatio-ed8d3",
    storageBucket: "chat-realtime-applicatio-ed8d3.appspot.com",
    messagingSenderId: "38463013731",
    appId: "1:38463013731:web:8b529523a33d620d6e4956"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}