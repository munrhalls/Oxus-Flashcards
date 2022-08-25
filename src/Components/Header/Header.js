import { useGlobal } from "../../Contexts/GlobalProvider";
import React from "react";
import { FormUser } from "./../ModalsUser/FormUser";

export function Header({ setModalOpen }) {
  const { getCurrentUser } = useGlobal();
  const currentUser = getCurrentUser();

  return (
    <header className="Header">
      <h6 className="Header__title">Flashcards</h6>
      <div className="Header__account">
        {currentUser?.email ? (
          <>
            <h1 className="Header__account__welcomeMsg">
              Welcome {currentUser?.email} !
            </h1>
            <FormUser.LogOutBtn setModalOpen={setModalOpen} />
          </>
        ) : (
          <>
            <FormUser.LoginBtn setModalOpen={setModalOpen} />
            <FormUser.RegisterBtn setModalOpen={setModalOpen} />
          </>
        )}
      </div>
    </header>
  );
}
