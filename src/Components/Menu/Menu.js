import React, { useState, useEffect } from "react";
import IMG__MENU from "./../../Assets/menu.png";
import useMobileCheck from "../../Hooks/useMobileCheck";
import IMG__CLOSE from "./../../Assets/close.png";
import { useGlobal } from "../../Contexts/GlobalProvider";
import Loader from "../Loader/Loader";
import { FormUser } from "../FormUser/FormUser";

import { Utils } from "../Utils/Utils";

export const Menu = {
  MobileBtn: function () {
    const { setModalOpen, modalOpen } = useGlobal();

    return (
      <>
        {useMobileCheck() && (
          <Utils.Toggle toggle={modalOpen === "MenuMobile"}>
            <button
              className="Header__mobileMenuBtn"
              onClick={() => setModalOpen(() => null)}
            >
              <span className="Header__mobileMenuBtn__text">Close</span>
              <img
                className="Header__mobileMenuBtn__img"
                src={IMG__CLOSE}
                alt="Menu icon"
              />
            </button>

            <button
              className="Header__mobileMenuBtn"
              onClick={() => setModalOpen(() => "MenuMobile")}
            >
              <span className="Header__mobileMenuBtn__text">Menu</span>
              <img
                className="Header__mobileMenuBtn__img"
                src={IMG__MENU}
                alt="Menu icon"
              />
            </button>
          </Utils.Toggle>
        )}
      </>
    );
  },

  Mobile: function ({ setActiveDeckId }) {
    const [isLoading, setIsLoading] = useState(true);
    const currentUser = useGlobal();

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 750);
    });

    return (
      <div className="Menu__Mobile">
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
      </div>
    );
  },
};
