// cluster 2 - firebase actual database, called firestore
import { firestore } from "../Firebase";
import { collection, addDoc, setDoc, doc, getDocs } from "firebase/firestore";

export default function FirestoreAPI() {
  function DB__getDecks(currentUser) {
    return getDocs(collection(firestore, `DecksForUserID_${currentUser.uid}`));
  }

  function DB__addDeck(userID, newDeck) {
    return addDoc(collection(firestore, `DecksForUserID_${userID}`), newDeck);
  }

  const value = {
    DB__getDecks,
    DB__getDecks,
    DB__addDeck,
    firestore,
    collection,
    addDoc,
    setDoc,
    doc,
    getDocs,
  };
  return value;
}
