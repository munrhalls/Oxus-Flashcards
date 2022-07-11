import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
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
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
