import React, { useRef, useState } from "react";
import { Form } from "./../../Components/Modals/Form";
import { useGlobal } from "../../Contexts/GlobalProvider";

export const FormUser = {
  TopBar: function ({ title }) {
    return (
      <div className="FormUser__topbar">
        <h1 className="FormUser__topbar__title">{title}</h1>
      </div>
    );
  },
  Error: function ({ error }) {
    console.log(error);
    return (
      <div className="FormUser__ErrorContainer">
        <h3 className="FormUser__ErrorContainer__msg">{error}</h3>
      </div>
    );
  },
  Exit: function ({ loading }) {
    const { setModalOpen } = useGlobal();
    return (
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
    );
  },
  GotAccBtn: function () {
    const { setModalOpen } = useGlobal();
    return (
      <div className="FormUser__gotAccContainer">
        <span className="FormUser__gotAccContainer__msg">
          Already have an account?
        </span>
        <button
          className="FormUser__gotAccContainer__button"
          onClick={(e) => {
            e.preventDefault();
            setModalOpen("Login");
          }}
        >
          Log in
        </button>
      </div>
    );
  },
  GotNoAccBtn: function () {
    const { setModalOpen } = useGlobal();
    return (
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
    );
  },
  Register: function () {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const passwordConfirmRef = useRef("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { register, setModalOpen } = useGlobal();

    async function handleSubmit(e) {
      e.preventDefault();
      if (!emailRef.current.value)
        return setError("E-mail field cannot be empty.");
      if (passwordRef.current.value.length < 6)
        return setError("Password needs at least 6 characters.");
      if (passwordRef.current.value !== passwordConfirmRef.current.value)
        return setError("Passwords do not match.");
      try {
        setError("");
        setLoading(true);
        register(emailRef.current.value, passwordRef.current.value);
      } catch {
        setError("Server couldn't create an account.");
      }
      setLoading(false);
    }

    return (
      <form className="FormUser" onSubmit={(e) => handleSubmit(e)}>
        <FormUser.TopBar title="REGISTER" />

        <div className="FormUser__inputs">
          <label className="FormUser__inputs__label">E-mail address:</label>
          <input
            ref={emailRef}
            type="email"
            className="FormUser__inputs__email"
          ></input>
          <label className="FormUser__inputs__label">Password:</label>
          <input
            ref={passwordRef}
            type="password"
            className="FormUser__inputs__password"
          ></input>
          <label className="FormUser__inputs__label">Confirm password:</label>
          <input
            ref={passwordConfirmRef}
            type="password"
            className="FormUser__inputs__passwordConfirm"
          ></input>
        </div>
        <FormUser.Error error={error} />
        <FormUser.GotAccBtn />
        <FormUser.Exit loading={loading} />
      </form>
    );
  },
  RegisterBtn: function () {
    const { setModalOpen } = useGlobal();
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
    const { setModalOpen } = useGlobal();
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useGlobal();

    async function handleSubmit(e) {
      e.preventDefault();
      if (!emailRef.current.value)
        return setError("E-mail field cannot be empty.");
      if (passwordRef.current.value.length < 6)
        return setError("Password needs at least 6 characters.");

      try {
        setError("");
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        setModalOpen(null);
      } catch (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError("Server couldn't log in.");
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
            type="email"
            className="FormUser__inputs__email"
          ></input>
          <label className="FormUser__inputs__label">Password:</label>
          <input
            ref={passwordRef}
            type="password"
            className="FormUser__inputs__password"
          ></input>
        </div>
        <FormUser.Error error={error} />
        <FormUser.GotNoAccBtn />
        <FormUser.Exit loading={loading} />
      </form>
    );
  },
  LoginBtn: function () {
    const { setModalOpen } = useGlobal();
    return (
      <button
        className="LoginRegisterBtn --login"
        onClick={() => setModalOpen(() => "Login")}
      >
        Log in
      </button>
    );
  },
  LogOutBtn: function () {
    const { logout } = useGlobal();

    return (
      <button className="LoginRegisterBtn --login" onClick={() => logout()}>
        Log out
      </button>
    );
  },
  ResetPassword: function () {
    const { setModalOpen } = useGlobal();
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const passwordConfirmRef = useRef("");
    function handleSubmit() {}
    return (
      <form className="FormUser" onSubmit={(e) => handleSubmit(e)}>
        <div className="FormUser__ResetPassword">
          <label className="FormUser__inputs__label">Password:</label>
          <input
            ref={passwordRef}
            type="password"
            className="FormUser__inputs__password"
          ></input>
          <label className="FormUser__inputs__label">Confirm password:</label>
          <input
            ref={passwordConfirmRef}
            type="password"
            className="FormUser__inputs__passwordConfirm"
          ></input>
          <button
            className="FormUser__ResetPassword__button"
            onClick={() => setModalOpen("Login")}
          >
            Submit
          </button>
          <button
            className="FormUser__ResetPassword__button"
            onClick={() => setModalOpen(null)}
          >
            Exit
          </button>
        </div>
      </form>
    );
  },
};
