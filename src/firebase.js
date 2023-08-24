// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfKUL68AmS8JMtLnJU2pl1wJVgSQeyDEI",
  authDomain: "cart-react1.firebaseapp.com",
  projectId: "cart-react1",
  storageBucket: "cart-react1.appspot.com",
  messagingSenderId: "635057174898",
  appId: "1:635057174898:web:69e6aa0ae12236277a85eb"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export const firestore = firebase.firestore()