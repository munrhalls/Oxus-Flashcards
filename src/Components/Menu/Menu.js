import React from "react";
import IMG__MENU from "./../../Assets/menu.png";
import useMobileCheck from "../../Hooks/useMobileCheck";

export const Menu = {
  MobileBtn: function () {
    return (
      <>
        {useMobileCheck() && (
          <btn className="Header__mobileMenuBtn">
            <span className="Header__mobileMenuBtn__text">Menu</span>
            <img
              className="Header__mobileMenuBtn__img"
              src={IMG__MENU}
              alt="Menu icon"
            />
          </btn>
        )}
      </>
    );
  },
};
