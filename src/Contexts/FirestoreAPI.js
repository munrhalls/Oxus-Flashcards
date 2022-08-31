// cluster 2 - firebase actual database, called firestore
import { firestore } from "../Firebase";
import { collection, addDoc, setDoc, doc, getDocs } from "firebase/firestore";

export default function FirestoreAPI() {
  function getUserDecksFromDatabase(currentUser) {
    return getDocs(collection(firestore, `DecksForUserID_${currentUser.uid}`));
  }

  function handleNewUserDatabaseEntry(userID, newDeck) {
    return addDoc(collection(firestore, `DecksForUserID_${userID}`), newDeck);
  }
  
  const value = {
    getUserDecksFromDatabase,

    firestore,
    getUserDecksFromDatabase,
    handleNewUserDatabaseEntry,
    collection,
    addDoc,
    setDoc,
    doc,
    getDocs,
  };
  return value;
}
