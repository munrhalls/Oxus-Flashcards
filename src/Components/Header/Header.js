import { useGlobal } from "../../Contexts/GlobalProvider";
import React, { useState, useEffect } from "react";
import { FormUser } from "../FormUser/FormUser";
import Loader from "../Loader/Loader";
import IMG__CARDS from "./../../Assets/cards.png";
import useMobileCheck from "../../Hooks/useMobileCheck";

export function Header({ setActiveDeckId }) {
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
      {useMobileCheck() && <div>Menu btn</div>}
      <h6 className="Header__title">
        Flashcards
        <img
          className="Header__title__icon"
          src={IMG__CARDS}
          alt="Flashcards Icon"
        />
      </h6>
      {!useMobileCheck() && (
        <div className="Header__menuBtns">
          <button>Tutorial</button>
          <button>About</button>
        </div>
      )}
      <div className="Header__account">
        <Loader active={isLoading}>
          {currentUser?.email ? (
            <>
              <h1 className="Header__account__welcomeMsg">
                Welcome {currentUser?.displayName} !
              </h1>
              <div className="Header__account__btnsContainer">
                <FormUser.EditProfileBtn />
                <FormUser.LogOutBtn
                  setActiveDeckId={() => setActiveDeckId(null)}
                />
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
