import { useFirebase } from "../../Contexts/FirebaseProvider";
import React from "react";
import { FormUser } from "./../ModalsUser/FormUser";

export function Header(setModalOpen) {
  const { currentUser } = useFirebase();
  return (
    <header className="Header">
      <h6 className="Header__title">Flashcards</h6>
      <div className="Header__account">
        {currentUser ? (
          <h1>Welcome {currentUser} !</h1>
        ) : (
          <>
            <FormUser.LoginBtn
              setModalOpen={(modalOpen) => setModalOpen(modalOpen)}
            />
            <FormUser.RegisterBtn
              setModalOpen={(modalOpen) => setModalOpen(modalOpen)}
            />
          </>
        )}
      </div>
    </header>
  );
}
