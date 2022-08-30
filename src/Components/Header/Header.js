import { useGlobal } from "../../Contexts/GlobalProvider";
import React, { useState, useEffect } from "react";
import { FormUser } from "../FormUser/FormUser";
import Loader from "../Loader/Loader";

export function Header() {
  const { getCurrentUser } = useGlobal();
  const [isLoading, setIsLoading] = useState(false);
  const currentUser = getCurrentUser();

  useEffect(() => {
    setIsLoading(true);
    let timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentUser]);

  return (
    <header className="Header">
      <h6 className="Header__title">Flashcards</h6>
      <div className="Header__account">
        <Loader active={isLoading}>
          {currentUser?.email ? (
            <>
              <h1 className="Header__account__welcomeMsg">
                Welcome {currentUser?.displayName} !
              </h1>
              <div className="Header__account__btnsContainer">
                <FormUser.EditProfileBtn />
                <FormUser.LogOutBtn />
              </div>
            </>
          ) : (
            <>
              <FormUser.LoginBtn />
              <FormUser.RegisterBtn />
            </>
          )}
        </Loader>
      </div>
    </header>
  );
}
