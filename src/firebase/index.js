import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
const firebaseConfig = {
    apiKey: "AIzaSyD-QBzmG0UTBp9R6a4_-YnpUuwpQH4058s",
    authDomain: "travel-e6223.firebaseapp.com",
    projectId: "travel-e6223",
    storageBucket: "travel-e6223.appspot.com",
    messagingSenderId: "143538845032",
    appId: "1:143538845032:web:1111ff71e5dbdfd45012dd"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {
    db
};