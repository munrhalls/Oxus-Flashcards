// cluster 2 - firebase actual database, called firestore
import { firestore } from "../Firebase";
import { collection, addDoc, setDoc, doc, getDocs } from "firebase/firestore";

export default function FirestoreAPI() {
  function getUserDecksFromDatabase(currentUser) {
    if (!currentUser) return;
    return getDocs(collection(firestore, `DecksForUserID_${currentUser.uid}`));
  }
  const value = {
    getUserDecksFromDatabase,

    firestore,
    getUserDecksFromDatabase,
    collection,
    addDoc,
    setDoc,
    doc,
    getDocs,
  };
  return value;
}
