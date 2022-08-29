import firebase from "../Firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
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
    // console.log(displayName, photoURL);
    // console.log(auth.currentUser);
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
      setCurrentUser(user);
    });
  }, []);

  const value = {
    getCurrentUser,
    register,
    editProfile,
    login,
    logout,
    resetPassword,
  };
  return value;
}
