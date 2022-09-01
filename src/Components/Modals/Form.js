import React from "react";
import IMG__CLOSE from "./../../Assets/close.png";
import IMG__SAVE from "./../../Assets/save.png";
import IMG__EDIT from "./../../Assets/edit.png";
import IMG__BACK from "./../../Assets/go-back-arrow.png";
import IMG__NUCLEAR from "./../../Assets/nuclear.png";
import { useGlobal } from "../../Contexts/GlobalProvider";
import { useState } from "react";

export const Form = {
  CloseBtn: function ({ close }) {
    return (
      <button
        type="button"
        className="Form__topBar__line__btn"
        onClick={() => close()}
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
  EditBtn: function ({ editFunction }) {
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
  Toggle: function ({ children, toggle }) {
    return toggle ? children[0] : children[1];
  },
  EditDeckName: function (props) {
    const [isEditDeckName, setIsEditDeckName] = useState(false);

    const { setEditedDeck, editedDeck } = props;
    return (
      <>
        <Form.Toggle toggle={isEditDeckName}>
          <input
            className="Form__topBar__line__deckName --input"
            placeholder="Type new deck name..."
            type="text"
            value={editedDeck?.name}
            onChange={(e) =>
              setEditedDeck({ ...editedDeck, name: e.target.value })
            }
          />
          <h1 className="Form__topBar__line__deckName">{editedDeck?.name}</h1>
        </Form.Toggle>


        <Form.Toggle toggle={isEditDeckName}>
          <Form.CloseBtn
            close={() => setIsEditDeckName(() => !isEditDeckName)}
          />
          <Form.EditBtn
            editFunction={() =>
              setIsEditDeckName((isEditDeckName) => !isEditDeckName)
            }
          />
        </Form.Toggle>
      </>
    );
  },
  ExitBtns: function ({ toModal }) {
    const { setModalOpen } = useGlobal();
    return (
      <div className="Form__exitBtnsContainer">
        <button
          type="button"
          className="Form__exitBtnsContainer__btn"
          onClick={() => setModalOpen(toModal || null)}
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
  BackBtn: function () {
    const { setModalOpen } = useGlobal();
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
        <div className="Form__ConfirmAndDelete__submitInputContainer">
          <img
            className="Form__ConfirmAndDelete__submitInputContainer__img"
            src={IMG__NUCLEAR}
          />
          <h1 className="Form__ConfirmAndDelete__submitInputContainer__text">
            DELETE
          </h1>
          <input
            className="Form__ConfirmAndDelete__submitInputContainer__submitInput"
            type="submit"
            value=""
          />
        </div>
      </div>
    );
  },
};
