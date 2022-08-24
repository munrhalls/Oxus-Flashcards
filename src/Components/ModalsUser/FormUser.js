import React, { useRef, useState } from "react";
import { Form } from "./../../Components/Modals/Form";
import { useFirebase } from "../../Contexts/FirebaseProvider";

export const FormUser = {
  Register: function ({ setModalOpen }) {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const passwordConfirmRef = useRef("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { register } = useFirebase();

    async function handleSubmit(e) {
      e.preventDefault();
      if (!emailRef.current.value)
        return setError("E-mail field cannot be empty.");
      if (passwordRef.current.value.length < 3)
        return setError("Password needs at least 3 characters.");
      if (passwordRef.current.value !== passwordConfirmRef.current.value)
        return setError("Passwords do not match.");

      try {
        setError("");
        setLoading(true);

        console.log(register());
        // await signup(emailRef.current.value, passwordRef.current.value)
      } catch {
        setError("Server couldn't create an account.");
      }
      setLoading(false);
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

        <div className="FormUser__ErrorContainer">
          <h3 className="FormUser__ErrorContainer__msg">{error}</h3>
        </div>

        <div className="FormUser__gotAccContainer">
          <span className="FormUser__gotAccContainer__msg">
            Already have an account?
          </span>
          <button
            className="FormUser__gotAccContainer__button"
            onClick={() => setModalOpen("Login")}
          >
            Log in
          </button>
        </div>

        <div className="FormUser__exit">
          <button
            className="FormUser__exit__cancel"
            onClick={() => setModalOpen(null)}
          >
            exit
          </button>

          <button
            disabled={loading}
            className="FormUser__exit__submit"
            type="submit"
          >
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
  Login: function ({ setModalOpen }) {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const passwordConfirmRef = useRef("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { firebaseWhatevs } = useFirebase();

    async function handleSubmit(e) {
      e.preventDefault();
      if (!emailRef.current.value)
        return setError("E-mail field cannot be empty.");
      if (passwordRef.current.value.length < 3)
        return setError("Password needs at least 3 characters.");
      if (passwordRef.current.value !== passwordConfirmRef.current.value)
        return setError("Passwords do not match.");

      try {
        setError("");
        setLoading(true);
        console.log(firebaseWhatevs());

        // await signup(emailRef.current.value, passwordRef.current.value)
      } catch {
        setError("Server couldn't create an account.");
      }
      setLoading(false);
    }

    return (
      <form className="FormUser" onSubmit={(e) => handleSubmit(e)}>
        <div className="FormUser__topbar">
          <h1 className="FormUser__topbar__title">LOG IN</h1>
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
        <div className="FormUser__ErrorContainer">
          <h3 className="FormUser__ErrorContainer__msg">{error}</h3>
        </div>
        <div className="FormUser__gotAccContainer">
          <span className="FormUser__gotAccContainer__msg">
            Don't have an account yet?
          </span>
          <button
            className="FormUser__gotAccContainer__button"
            onClick={() => setModalOpen("Register")}
          >
            Make an account
          </button>
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
  LoginBtn: function ({ setModalOpen }) {
    return (
      <button
        className="LoginRegisterBtn --login"
        onClick={() => setModalOpen(() => "Login")}
      >
        Log in
      </button>
    );
  },
};
