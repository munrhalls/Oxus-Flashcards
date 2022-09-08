import { useGlobal } from "../../Contexts/GlobalProvider";
import React, { useState, useEffect } from "react";
import { FormUser } from "../FormUser/FormUser";
import Loader from "../Loader/Loader";
import IMG__CARDS from "./../../Assets/cards.png";
import { Menu } from "./../Menu/Menu";
import useMobileCheck from "../../Hooks/useMobileCheck";
import { Utils } from "../Utils/Utils";

export function Header({ setActiveDeckId }) {
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useGlobal();

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
      <Menu.MobileBtn />
      {currentUser && (
        <h6 className="Header__loggedStatus">
          <span className="Header__loggedStatus__title"></span>Logged:
          <span className="Header__loggedStatus__displayName">
            {currentUser.displayName}
          </span>
        </h6>
      )}
      <h6 className="Header__title">
        <span className="Header__title__text">Flashcards</span>
        <img
          className="Header__title__icon"
          src={IMG__CARDS}
          alt="Flashcards Icon"
        />
      </h6>

      {/* {!useMobileCheck() && (
        <div className="Header__desktopMenuBtns">
          <button>Tutorial</button>
          <button>About</button>
        </div>
      )} */}

      {!useMobileCheck() && (
        <Loader active={isLoading}>
          <Utils.Toggle toggle={currentUser?.email}>
            <div className="Header__account">
              <h1 className="Header__account__welcomeMsg">
                Welcome {currentUser?.displayName} !
              </h1>
              <div className="Header__account__btnsContainer">
                <FormUser.EditProfileBtn />
                <FormUser.LogOutBtn
                  setActiveDeckId={() => setActiveDeckId(null)}
                />
              </div>
            </div>

            <div className="Header__account">
              <FormUser.LoginBtn />
              <FormUser.RegisterBtn />
            </div>
          </Utils.Toggle>
        </Loader>
      )}
    </header>
  );
}
