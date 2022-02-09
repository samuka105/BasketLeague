// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore }  from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqMP2K3Oeo3WzPeE1a0ggZ29weUYdpG1A",
  authDomain: "basket-league-e5417.firebaseapp.com",
  projectId: "basket-league-e5417",
  storageBucket: "basket-league-e5417.appspot.com",
  messagingSenderId: "315356713499",
  appId: "1:315356713499:web:a6afca254385738fb95ebe",
  measurementId: "G-XK5QZ51NVL"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const db = getFirestore(app)
export{auth, db}
