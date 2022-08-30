// cluster 1 - firebase database authentication
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
// cluster 2 - firebase actual database, called firestore
import { firestore } from "../Firebase";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs,
  query,
} from "firebase/firestore";
// cluster 3, exporting firebaseAPI contents globally to app
import React, { useContext, useEffect, useState } from "react";
export default function FirebaseFunctions() {
  const [currentUser, setCurrentUser] = useState();

  function getCurrentUser() {
    return currentUser;
  }

  function register(email, password) {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function editProfile(displayName, photoURL) {
    const auth = getAuth();
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  }

  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }

  function resetPassword(email) {
    const auth = getAuth();
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(() => user);
    });
  }, []);

  const value = {
    currentUser,
    getCurrentUser,
    register,
    editProfile,
    login,
    logout,
    resetPassword,

    firestore,
    collection,
    addDoc,
    setDoc,
    doc,
    getDocs,
    query,
  };
  return value;
}
