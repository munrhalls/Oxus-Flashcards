import React from "react";
import { Form } from "./../../Components/Modals/Form";
import { useFirebase } from "../../Contexts/FirebaseProvider";

export const FormUser = {
  Register: function ({ setModalOpen }) {
    const { firebaseWhatevs } = useFirebase();
    function handleSubmit(e) {
      e.preventDefault();
      console.log("submit");
      console.log(firebaseWhatevs());
    }

    return (
      <form className="FormUser" onSubmit={(e) => handleSubmit(e)}>
        <div className="FormUser__topbar">
          <h1 className="FormUser__topbar__title">REGISTER</h1>
        </div>

        <div className="FormUser__inputs">
          <label className="FormUser__inputs__label">E-mail address:</label>
          <input
            ref={emailRef}
            type="text"
            className="FormUser__inputs__email"
          ></input>
          <label className="FormUser__inputs__label">Password:</label>
          <input
            ref={passwordRef}
            type="text"
            className="FormUser__inputs__password"
          ></input>
          <label className="FormUser__inputs__label">Confirm password:</label>
          <input
            ref={passwordConfirmRef}
            type="text"
            className="FormUser__inputs__passwordConfirm"
          ></input>
        </div>

        <div className="FormUser__gotAccContainer">
          <span className="FormUser__gotAccContainer__msg">
            Already have an account?
          </span>
          <button className="FormUser__gotAccContainer__button">Log in</button>
        </div>

        <div className="FormUser__exit">
          <button
            className="FormUser__exit__cancel"
            onClick={() => setModalOpen(null)}
          >
            cancel btn
          </button>

          <button className="FormUser__exit__submit" type="submit">
            submit btn
          </button>
        </div>
      </form>
    );
  },
  RegisterBtn: function ({ setModalOpen }) {
    return (
      <button
        className="LoginRegisterBtn --register"
        onClick={() => setModalOpen(() => "Register")}
      >
        Register
      </button>
    );
  },
  Login: function () {
    return (
      <form className="FormUser">
        <div className="FormUser__topbar">
          <h1 className="FormUser__topbar__title">LOGIN</h1>
        </div>
        <div className="FormUser__inputs">
          <label className="FormUser__inputs__label">E-mail address:</label>
          <input className="FormUser__inputs__email"></input>
          <label className="FormUser__inputs__label">Password:</label>
          <input className="FormUser__inputs__password"></input>
        </div>
        {/* reset pw */}
        <div className="FormUser__exit">
          <button className="FormUser__exit__cancel">cancel btn</button>
          {/* <button className="FormUser__exit__submit" onClick={handleSubmit}>
            submit btn
          </button> */}
        </div>
      </form>
    );
  },
  LoginBtn: function ({ setModalOpen }) {
    return (
      <button
        className="LoginRegisterBtn --login"
        onClick={() => setModalOpen(() => "login")}
      >
        Log in
      </button>
    );
  },
};
