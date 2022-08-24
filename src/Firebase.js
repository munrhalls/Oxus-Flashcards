// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNaOxF_mwBcC1_bJiqonyqjpvDFEhSpgg",
  authDomain: "oxus-9ce02.firebaseapp.com",
  projectId: "oxus-9ce02",
  storageBucket: "oxus-9ce02.appspot.com",
  messagingSenderId: "158474502364",
  appId: "1:158474502364:web:ff1ee63e4fdd2671cdf419",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export default firebase;
