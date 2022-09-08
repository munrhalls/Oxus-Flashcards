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
    const { setMenuOpen, menuOpen } = useGlobal();

    return (
      <>
        {useMobileCheck() && (
          <Utils.Toggle toggle={menuOpen === "MenuMobile"}>
            <button
              className="Header__mobileMenuBtn"
              onClick={() => setMenuOpen(() => null)}
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
              onClick={() => setMenuOpen(() => "MenuMobile")}
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
    const { currentUser } = useGlobal();

    return (
      <div className="Menu__Mobile">
        <Utils.Toggle toggle={currentUser}>
          <div className="Menu__Mobile__account">
            <FormUser.EditProfileBtn />
            <FormUser.LogOutBtn setActiveDeckId={() => setActiveDeckId(null)} />
          </div>

          <div className="Menu__Mobile__account">
            <FormUser.LoginBtn />
            <FormUser.RegisterBtn />
          </div>
        </Utils.Toggle>
      </div>
    );
  },
};
