// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1NffrWKC1rqePBXfksqwc9za2t1ZlR2A",
    authDomain: "believe-react.firebaseapp.com",
    projectId: "believe-react",
    storageBucket: "believe-react.appspot.com",
    messagingSenderId: "458592846006",
    appId: "1:458592846006:web:526895304b67c78e20a617"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)