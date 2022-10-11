import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAeAuJuA24C1vN9TDVDTzYHZf-EJRgAGJ0",
    authDomain: "prototipo-3d.firebaseapp.com",
    projectId: "prototipo-3d",
    storageBucket: "prototipo-3d.appspot.com",
    messagingSenderId: "606323228707",
    appId: "1:606323228707:web:3b544c356e8d5b8beef196"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);