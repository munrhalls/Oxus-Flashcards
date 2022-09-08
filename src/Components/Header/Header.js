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
      <h6 className="Header__loggedStatus">
        <span className="Header__loggedStatus__title">Logged:</span>
        <span className="Header__loggedStatus__displayName">
          {currentUser ? currentUser.displayName : "You're not logged in."}
        </span>
      </h6>

      <h6 className="Header__title">
        <img
          className="Header__title__icon"
          src={IMG__CARDS}
          alt="Flashcards Icon"
        />
        <span className="Header__title__text">FLASHCARDS</span>
      </h6>
    </header>
  );
}
