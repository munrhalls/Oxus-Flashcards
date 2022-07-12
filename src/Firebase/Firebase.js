import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNaOxF_mwBcC1_bJiqonyqjpvDFEhSpgg",
  authDomain: "oxus-9ce02.firebaseapp.com",
  projectId: "oxus-9ce02",
  storageBucket: "oxus-9ce02.appspot.com",
  messagingSenderId: "158474502364",
  appId: "1:158474502364:web:ff1ee63e4fdd2671cdf419",
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

const flashcardsCol = collection(db, "flashcards");

export { flashcardsCol, getDocs, doc };
