import React from "react";
import IMG__CLOSE from "./../Assets/close.png";
import IMG__SAVE from "./../Assets/save.png";
import IMG__EDIT from "./../Assets/edit.png";
import IMG__BACK from "./../Assets/go-back-arrow.png";
import IMG__NUCLEAR from "./../Assets/nuclear.png";

export const Form = {
  Close: function ({ closeFunction }) {
    return (
      <button
        type="button"
        className="Form__topBar__line__btn"
        onClick={() => closeFunction()}
      >
        <span className="Form__topBar__line__btn__text">Close</span>
        <img
          className="Form__topBar__line__btn__icon"
          src={IMG__CLOSE}
          alt="CLOSE"
        />
      </button>
    );
  },
  Edit: function ({ editFunction }) {
    return (
      <button
        type="button"
        className="Form__topBar__line__btn"
        onClick={() => editFunction()}
      >
        <span className="Form__topBar__line__btn__text">Edit</span>
        <img
          className="Form__topBar__line__btn__icon"
          src={IMG__EDIT}
          alt="CLOSE"
        />
      </button>
    );
  },
  EditName: function ({ onChangeFunction, newVal }) {
    return (
      <input
        className="Form__topBar__line__deckName --input"
        placeholder="Type new deck name..."
        type="text"
        value={newVal}
        onChange={(e) => onChangeFunction(e)}
      />
    );
  },
  ExitBtns: function ({ setModalOpen }) {
    return (
      <div className="Form__exitBtnsContainer">
        <button
          type="button"
          className="Form__exitBtnsContainer__btn"
          onClick={() => setModalOpen()}
        >
          <span className="Form__exitBtnsContainer__btn__text">Close</span>
          <img
            className="Form__exitBtnsContainer__btn__img"
            src={IMG__CLOSE}
            alt="CLOSE"
          />
        </button>
        <button className="Form__exitBtnsContainer__btn" type="submit">
          <span className="Form__exitBtnsContainer__btn__text">Save</span>
          <img
            className="Form__exitBtnsContainer__btn__img"
            src={IMG__SAVE}
            alt="SAVE"
          />
        </button>
      </div>
    );
  },
  BackBtn: function ({ setModalOpen }) {
    return (
      <button className="Form__BackBtn" onClick={() => setModalOpen()}>
        <span className="Form__BackBtn__text">BACK</span>
        <img className="Form__BackBtn__img" src={IMG__BACK} />
      </button>
    );
  },
  ConfirmAndDelete: function ({ id }) {
    return (
      <div className="Form__ConfirmAndDelete">
        <div className="Form__ConfirmAndDelete__textContainer">
          <h1 className="Form__ConfirmAndDelete__textContainer__text">
            Action not reversible.
          </h1>
          <h1 className="Form__ConfirmAndDelete__textContainer__text">
            Are you sure?
          </h1>
        </div>
        <input
          className="Form__ConfirmAndDelete__submitInput"
          type="submit"
          value="Delete"
        />
      </div>
    );
  },
};
