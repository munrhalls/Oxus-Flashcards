import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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

export {
  flashcardsCol,
  addDoc,
  setDoc,
  getDocs,
  doc,
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  collection,
  db,
};
