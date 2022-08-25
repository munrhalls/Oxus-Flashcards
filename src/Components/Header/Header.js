import { useGlobal } from "../../Contexts/GlobalProvider";
import React from "react";
import { FormUser } from "./../ModalsUser/FormUser";

export function Header() {
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
            <FormUser.LogOutBtn />
          </>
        ) : (
          <>
            <FormUser.LoginBtn />
            <FormUser.RegisterBtn />
          </>
        )}
      </div>
    </header>
  );
}
